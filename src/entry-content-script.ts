// import './content/render.tsx'


import { isElementNode, isTextNode } from "./util/dom";

const NEEDLE = 'Biden';

let card: HTMLElement | undefined;


function highlightMatches(root: Node) {
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

    for (let i = 0; walker.nextNode() && i < 10000; i++) {
        const node = walker.currentNode as Text;

        if (!node.textContent) continue;

        let start: number;
        let end: number | undefined;

        while ((start = node.textContent.indexOf(NEEDLE, end)) >= 0) {
            end = start + NEEDLE.length;

            const range = new Range();
            range.setStart(node, start);
            range.setEnd(node, end);

            const mark = document.createElement('hackathon-match');

            mark.addEventListener('mouseover', handleMouseOver)
            mark.addEventListener('mouseout', () => {
                // console.log("mouseout", mark)
                if (card) card.remove();
            })

            range.surroundContents(mark);
            // yield mark
        }
    }
}

const CARD_HEIGHT = 200;
const CARD_WIDTH = 300;

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}


function handleMouseOver(this: HTMLElement, event: MouseEvent) {
    console.log("mouseover", this, event)

    const boundingRect = this.getBoundingClientRect();

    const centerX = boundingRect.x + boundingRect.width / 2;
    const centerY = boundingRect.y + boundingRect.height / 2;

    const viewWidth = document.documentElement.clientWidth;
    const viewHeight = document.documentElement.clientHeight;

    let offsetX = viewWidth / 4;

    if (centerX > viewWidth / 2) {
        offsetX = -offsetX;
    }


    const cardTop = clamp(centerY - CARD_HEIGHT / 2, 0, viewHeight - CARD_HEIGHT);
    const cardLeft = clamp(centerX + offsetX - CARD_WIDTH / 2, 0, viewWidth - CARD_WIDTH);

    console.log({ centerX, centerY, viewWidth, viewHeight, offsetX, cardTop, cardLeft })

    if (card) {
        card.remove();
    }

    card = document.createElement('div');
    card.style.position = 'fixed';
    card.style.top = `${cardTop}px`;
    card.style.left = `${cardLeft}px`;
    card.style.width = `${CARD_WIDTH}px`;
    card.style.height = `${CARD_HEIGHT}px`;
    card.style.backgroundColor = 'green';
    document.body.appendChild(card);
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
