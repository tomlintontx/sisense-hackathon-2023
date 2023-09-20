// import './content/render.tsx'

import ReactDOM from "react-dom/client";

import { isElementNode, isTextNode } from "./util/dom";
import { useEffect, useState } from "react";
import { SisenseContextProvider } from "@sisense/sdk-ui";
import { StrictMode } from "react";

import PlayerCard from "./components/PlayerCard/PlayerCard";
import { type TrieMatch } from "./util/trie";

const NEEDLE = 'Biden';

let card: HTMLElement | undefined;

async function highlightMatches(root: Node) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
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

    for (let i = 0; walker.nextNode() && i < 10_000; i++) {

        const node = walker.currentNode as Text;
        
        if (!node.textContent) continue;

        const resp = await chrome.runtime.sendMessage({ type: "find-matches", payload: node.textContent });
        
        if (!resp) continue;

        switch (resp.type) {
            case 'found-matches': {
                const matches = resp.payload as TrieMatch[];

                for (const [start, end, text] of matches) {
                    const range = new Range();
                    range.setStart(node, start);
                    range.setEnd(node, end);

                    const mark = document.createElement('hackathon-match');
                    mark.dataset.text = text;
                    mark.addEventListener('mouseover', handleMouseOver)
                    range.surroundContents(mark);
                }
                break
            }
        }

        // let start: number;
        // let end: number | undefined;

        // while ((start = node.textContent.indexOf(NEEDLE, end)) >= 0) {
        //     end = start + NEEDLE.length;

        //     const range = new Range();
        //     range.setStart(node, start);
        //     range.setEnd(node, end);

        //     const mark = document.createElement('hackathon-match');

        //     // mark.addEventListener('mouseout', unMount)

        //     range.surroundContents(mark);
        //     // yield mark
        // }
    }
}

const CARD_HEIGHT = 350;
const CARD_WIDTH = 500;

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

function unMount() {
    if (card) {
        card.remove();
        card = undefined;
    }
}

const sisenseApiKey = import.meta.env.VITE_SISENSE_API_KEY ?? import.meta.env.VITE_SISENSE_TOKEN
const sisenseUrl = import.meta.env.VITE_SISENSE_URL

let current: HTMLElement | undefined;
function handleMouseOver(this: HTMLElement, event: MouseEvent) {
    console.log(this.innerText)
    if (current === this) return; // already mounted

    current = this;

    unMount();

    console.log("mouseover", this, event)

    const boundingRect = this.getBoundingClientRect();

    const centerX = boundingRect.x + boundingRect.width / 2;
    const centerY = boundingRect.y + boundingRect.height / 2;

    const viewWidth = document.documentElement.clientWidth;
    const viewHeight = document.documentElement.clientHeight;

    let offsetX = 50 + (CARD_WIDTH + boundingRect.width) / 2;

    if (centerX > viewWidth / 2) {
        offsetX = -offsetX;
    }


    const cardTop = clamp(centerY - CARD_HEIGHT / 2, 0, viewHeight - CARD_HEIGHT);
    const cardLeft = clamp(centerX + offsetX - CARD_WIDTH / 2, 0, viewWidth - CARD_WIDTH);

    console.log({ centerX, centerY, viewWidth, viewHeight, offsetX, cardTop, cardLeft })

    if (!card) card = document.createElement('div');
    card.style.position = 'fixed';
    card.style.top = `${cardTop}px`;
    card.style.left = `${cardLeft}px`;
    card.style.width = `${CARD_WIDTH}px`;
    card.style.height = `${CARD_HEIGHT}px`;
    card.style.backgroundColor = 'green';
    document.body.appendChild(card);

    ReactDOM.createRoot(card).render(
        <StrictMode>
            <SisenseContextProvider
            url= {sisenseUrl}
            token= {sisenseApiKey}
            >
            <PlayerCard player={'Patrick Mahomes'} />
            </SisenseContextProvider>  
        </StrictMode>
    )
}

function Dummy() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(x => x+1)
        })

        return () => clearInterval(timer)
    }, [])

    return <div style={{width: "100%", height: "100%", backgroundColor: "red"}}>{count}</div>
}

highlightMatches(document.body)







// import { isElementNode, isTextNode } from "../util/dom";

// const resp = await chrome.runtime.sendMessage({type: "request-type", ...})

// const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
//     acceptNode(node) {
//         if (isTextNode(node)) {
//             return NodeFilter.FILTER_ACCEPT;
//         }

//         if (isElementNode(node)) {
//             if (node.nodeName === 'SCRIPT') return NodeFilter.FILTER_REJECT;
//             if (isHighlight(node)) return NodeFilter.FILTER_REJECT
//             return NodeFilter.FILTER_SKIP; // skip elements, we only actually want text nodes
//         }

//         console.log("unknown node type", node)
//         return NodeFilter.FILTER_SKIP;
//     }
// });

// function isHighlight(node: Element): boolean {
//     return node.classList.contains("hackathon-highlight");
// }

// function createHighlight(): Element {
//     const span = document.createElement("span");
//     span.classList.add("hackathon-highlight");
//     return span;
// }

// for (let i = 0; walker.nextNode() && i < 10_000; i++) {
//     const node = walker.currentNode;

//     const content = node.textContent;
//     if (!content) continue;

//     const needle = "Biden"
//     const idx = content.indexOf(needle);
//     if (idx === -1) continue;

//     const range = document.createRange();
//     range.setStart(node, idx);
//     range.setEnd(node, idx + needle.length);

//     // console.log("found", { node, content, idx, range }, range.toString())

//     const span = createHighlight();

//     range.surroundContents(span);
// }

// const observer = new MutationObserver((mutations) => {

//     console.log({ mutations })

// });
// observer.observe(document.body, {
//     subtree: true,
//     // childList: true,
//     characterData: true,
// });
