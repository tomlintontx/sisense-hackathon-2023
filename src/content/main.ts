
// const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
//     acceptNode(node) {
//         switch (node.nodeType) {
//             case Node.TEXT_NODE:
//                 return NodeFilter.FILTER_ACCEPT;
//             case Node.ELEMENT_NODE:
//                 if (node.nodeName === 'SCRIPT') return NodeFilter.FILTER_REJECT;
//                 console.log({ elNode: node })
//                 return NodeFilter.FILTER_SKIP; // skip elements, we only actually want text nodes
//             default:
//                 console.log("unknown node type", node)
//                 return NodeFilter.FILTER_SKIP;
//         }
//     }
// });

// const container = (() => {
//     let container = document.getElementById("hackathon-container")
//     if (!container) {
//         container = document.createElement("div");
//         container.id = "hackathon-container";
//         document.body.appendChild(container);
//     }
//     return container
// })();

// while (walker.nextNode()) {
//     const node = walker.currentNode;

//     const content = node.textContent;
//     if (!content) continue;

//     const needle = "Biden"
//     const idx = content.indexOf(needle);
//     if (idx === -1) continue;

//     const range = document.createRange();
//     range.setStart(node, idx);
//     range.setEnd(node, idx + needle.length);

//     console.log("found", { node, content, idx, range }, range.toString())



//     // range.surroundContents(document.createElement("span"));

//     // for (const rect of range.getClientRects()) {
//     //     const div = document.createElement("div");
//     //     div.style.position = "absolute";
//     //     div.style.top = `${rect.top}px`;
//     //     div.style.left = `${rect.left}px`;
//     //     div.style.width = `${rect.width}px`;
//     //     div.style.height = `${rect.height}px`;
//     //     div.style.border = "1px solid red";

//     //     container.appendChild(div);

//     // }
// }

const observer = new MutationObserver((mutations) => {

    console.log({ mutations })

});
observer.observe(document.body, {
    subtree: true,
    // childList: true,
    characterData: true,
});
