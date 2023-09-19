// console.log("background2", { chrome })

import browser from "webextension-polyfill"

// async function main() {
//     const activeTab = await browser.tabs.query({ active: true, currentWindow: true, })


//     // const port = await browser.tabs.connect();



// }


// main()

browser.runtime.onConnect.addListener(port => {
    console.log("background", { port })
    // port.onMessage.addListener(msg => {
    //     console.log("background", { msg })
    // })
    // port.postMessage({ hello: "world" })
})
