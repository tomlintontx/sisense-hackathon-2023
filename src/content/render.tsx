import React from 'react'
import { createPortal } from 'react-dom'
import ReactDOM from 'react-dom/client'

const ROOT_ID = 'sisense-hackathon-2023'
function getOrCreateRootEl() {
    let root = document.getElementById(ROOT_ID)
    if (!root) {
        root = document.createElement('div')
        root.id = ROOT_ID
        document.body.appendChild(root)
    }
    return root
    // return document.createElement('div')
}

const root = ReactDOM.createRoot(document.createElement('div')/* getOrCreateRootEl() */)
root.render(
    <React.StrictMode>
        {createPortal(<Hypercard />, getOrCreateRootEl())}
    </React.StrictMode>
)

console.log({chrome})

function Hypercard() {
    return <div style={{position:"fixed", zIndex:9999, minHeight:"100px", minWidth: "100px", right: 0, bottom: 0}}>Hypercard</div>
}
// import browser from 'webextension-polyfill'
// browser.runtime.

// .render(
//   <React.StrictMode>
//     <PlayerCard player={playerData} />
//   </React.StrictMode>,
// ) 
