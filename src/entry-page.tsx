// import './content/content.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Player } from './components/PlayerCard/PlayerCard.tsx';
// import PlayerCard from './components/PlayerCard/PlayerCard.tsx';
// import { ExecuteQuery, SisenseContextProvider } from '@sisense/sdk-ui';
// import * as DM from './nfl_data.ts'
// import { filters } from '@sisense/sdk-data';
// import { measures } from '@sisense/sdk-data';

// const sisenseApiKey = import.meta.env.VITE_SISENSE_API_KEY
// const sisenseUrl = import.meta.env.VITE_SISENSE_URL

import Page from './components/Page.tsx'

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)

// function * limit<T>(max: number, it: Iterable<T>) : Generator<T> {
//   for (const item of it) {
//     if (max-- <= 0) return;
//     yield item;
//   }
// }

// // function * getTextNodes(root: Node, filter?: NodeFilter) : Generator<Text> {
// //   const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, filter);
// //   while (walker.nextNode()) {
// //     yield walker.currentNode as Text;
// //   }
// // }

// /** Finds Non-Overlapping Matches */
// function * findInText(needle: string, haystack: string) : Generator<[start: number, end: number]> {
//   const len = needle.length;

//   let start: number;
//   let end: number | undefined;

//   while ((start = haystack.indexOf(needle, end)) >= 0) {
//     end = start + len;
//     yield [start, end];
//   }
// }

// // function * findInTextNodes(needle: string, haystack: Node) : Generator<[node: Text, start: number, end: number]> {
// //   for (const text of getTextNodes(haystack)) {
// //     if (!text.textContent) continue;

// //     for (const [start, end] of findInText(needle, text.textContent)) {
// //       yield [text, start, end];
// //     }
// //   }
// // }

// // for (const match of limit(5,findInTextNodes('Biden', document.body))) {
// //   console.log("found", match);
// // }

// function * findMatches(needle: string, root: Node) : Generator<Range> {

//   const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

//   while (walker.nextNode()) {
//     const text = walker.currentNode as Text;

//     if (!text.textContent) continue;

//     for (const [start, end] of findInText(needle, text.textContent)) {
//       const range = new Range();
//       range.setStart(text, start);
//       range.setEnd(text, end);
//       yield range;
//     }
//   }

// }
