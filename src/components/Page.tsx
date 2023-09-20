import { useEffect, useState } from "react"

import { isElementNode, isTextNode } from "../util/dom";

const NEEDLE = 'Biden';

function highlightMatches() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (isTextNode(node)) 
                return NodeFilter.FILTER_ACCEPT;


            if (isElementNode(node)) {
                switch (node.tagName) {
                    case 'SCRIPT':
                    case 'NOSCRIPT':
                    case 'STYLE':
                    case 'HACKATHON-MATCH':
                        return NodeFilter.FILTER_REJECT;
                }
            }
            
            return NodeFilter.FILTER_SKIP;
        }
    });

    for (let i = 0; walker.nextNode() && i < 10000; i++) {
        const node = walker.currentNode as Text;

        if (!node.textContent) continue;



        let start: number;
        let end: number | undefined;

        while((start = node.textContent.indexOf(NEEDLE, end)) >= 0) {
            end = start + NEEDLE.length;

            const range = new Range();
            range.setStart(node, start);
            range.setEnd(node, end);

            const mark = document.createElement('hackathon-match');
            range.surroundContents(mark);
            // yield mark
        }
    }
}

export default function Page() {

    // const [matches, setMatches] = useState<HTMLElement[]>(() => Array.from());

    useEffect(() => {
        // TODO: use a MutationObserver to watch for changes to the DOM
        // currently I'm just gonna long-poll
        highlightMatches()
        
        const interval = setInterval(() => {
            highlightMatches()
        }, 1000);

        return () => {
            clearInterval(interval);
        }
        
    },[])

    return (
        <></>
    ) 
}
  