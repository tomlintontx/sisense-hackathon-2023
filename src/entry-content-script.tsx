import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { SisenseContextProvider } from "@sisense/sdk-ui";
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import PlayerCard from "./components/PlayerCard/PlayerCard";

import { isElementNode, isTextNode } from "./util/dom";
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

    for (let i = 0; walker.nextNode() && i < 100_000; i++) {

        const node = walker.currentNode as Text;
        
        const content = node.textContent;
        if (!content) continue;

        const resp = await chrome.runtime.sendMessage({ type: "find-matches", payload: content });

        // if (content !== node.textContent) continue;
        if (!resp) continue;
        
        switch (resp.type) {
            case 'found-matches': {
                const matches = resp.payload as TrieMatch[];
                
                if (matches.length) console.log( {matches})
                try {
                    for (const [start, end, text] of matches.reverse()) {
                        const range = new Range();
                        range.setStart(node, start);
                        range.setEnd(node, end);
                        
                        const mark = document.createElement('hackathon-match');
                        mark.dataset.text = text;
                        range.surroundContents(mark);

                        // mark.addEventListener('mouseover', handleMouseOver, { capture: true })

                    }
                } catch (err) {
                    console.warn("Problem wrapping text", err, node, matches);
                }
                break
            }
        }
    }
}

const CARD_HEIGHT = 375;
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

const sisenseApiKey = import.meta.env.VITE_SISENSE_API_KEY
const sisenseUrl = import.meta.env.VITE_SISENSE_URL

let current: HTMLElement | undefined;

document.addEventListener('mouseover', handleMouseOver, { capture: true });

function handleMouseOver(event: MouseEvent) {
    const el = event.target as HTMLElement | null;
    if (el?.tagName !== 'HACKATHON-MATCH') return;
    console.log("mouse over", el)
    if (current === el) return; // already mounted
    current = el;

    unMount();

    const name = el.dataset.text;
    if (!name) {
        console.warn("no name found", el)
        return;
    }
    
    console.log("mouseover", el, event)
    
    const boundingRect = el.getBoundingClientRect();

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

    // console.log({ centerX, centerY, viewWidth, viewHeight, offsetX, cardTop, cardLeft })

    if (!card) card = document.createElement('div');
    card.style.position = 'fixed';
    card.style.top = `${cardTop}px`;
    card.style.left = `${cardLeft}px`;
    card.style.width = `${CARD_WIDTH}px`;
    card.style.height = `${CARD_HEIGHT}px`;
    // card.style.backgroundColor = 'green';
    card.style.zIndex = '9999';
    document.body.appendChild(card);

    const shadowRoot = card.attachShadow({ mode: 'closed' });

    const reactRoot = document.createElement('div');
    shadowRoot.appendChild(reactRoot);

    const cache = createCache({ key: 'hackathon', container: shadowRoot, prepend: true})

    ReactDOM.createRoot(/* card.attachShadow({mode: 'closed'}) */ reactRoot).render(
        <StrictMode>
            <CacheProvider value={cache}>
                <SisenseContextProvider url={sisenseUrl} token={sisenseApiKey}>
                    <PlayerCard player={name} />
                </SisenseContextProvider>  
            </CacheProvider>
        </StrictMode>
    )
}

highlightMatches(document.body)

// setInterval(() => {
//     console.log("Rescanning for matches")
//     highlightMatches(document.body)
// }, 5000)
