// import './content/render.tsx'

import ReactDOM from "react-dom/client";

import { isElementNode, isTextNode } from "./util/dom";
import { useEffect, useState } from "react";
import { SisenseContextProvider } from "@sisense/sdk-ui";
import { StrictMode } from "react";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import { type TrieMatch } from "./util/trie";

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

    for (let i = 0; walker.nextNode() && i < 1000; i++) {

        const node = walker.currentNode as Text;
        
        if (!node.textContent) continue;

        const resp = await chrome.runtime.sendMessage({ type: "find-matches", payload: node.textContent });
        
        if (!resp) continue;
        
        switch (resp.type) {
            case 'found-matches': {
                const matches = resp.payload as TrieMatch[];
                
                if (matches.length) console.log( {matches})
                for (const [start, end, text] of matches) {
                    try {
                        const range = new Range();
                        range.setStart(node, start);
                        range.setEnd(node, end);
                        
                        const mark = document.createElement('hackathon-match');
                        range.surroundContents(mark);

                        mark.dataset.text = text;
                        mark.addEventListener('mouseover', handleMouseOver, { capture: true })

                    } catch (err) {
                        console.warn("Problem wrapping text", err);
                    }
                }
                break
            }
        }
    }
}

const CARD_HEIGHT = 350;
const CARD_WIDTH = 600;

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
    console.log("mouse over")
    if (current === this) return; // already mounted
    current = this;

    unMount();

    const name = this.dataset.text;
    if (!name) {
        console.warn("no name found", this)
        return;
    }
    
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
    // card.style.backgroundColor = 'green';
    card.style.zIndex = '9999';
    document.body.appendChild(card);

    ReactDOM.createRoot(card).render(
        <StrictMode>
            <SisenseContextProvider
            url= {sisenseUrl}
            token= {sisenseApiKey}
            >
            <PlayerCard player={name} />
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

// setInterval(() => {
//     highlightMatches(document.body)
// }, 5000)
