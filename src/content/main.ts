// chrome.permissions.request({
//     permissions: ["search"]
// }).then(granted => { console.log("Requested Permission for Search", { granted }) })

// // chrome.search.query({
// //     "text": "Biden",
// // }).then(results => {
// //     console.log({ results })
// // })

import browser from "webextension-polyfill"


console.log("content", { chrome, browser })

debugger
