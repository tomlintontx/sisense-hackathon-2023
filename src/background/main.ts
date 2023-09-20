import { BearerAuthenticator, HttpClient } from "@sisense/sdk-rest-client";
import { DimensionalQueryClient, type QueryDescription } from "@sisense/sdk-query-client";

import * as DM from '../nfl_data'

import Trie from "./trie";

const searchTrie = new Trie();

async function main() {

    const url = import.meta.env.VITE_SISENSE_URL;
    const token = import.meta.env.VITE_SISENSE_TOKEN;

    const auth = new BearerAuthenticator(url, token);

    const httpClient = new HttpClient(url, auth, 'hackathon-2023');

    const queryClient = new DimensionalQueryClient(httpClient);

    console.log({ httpClient, queryClient })

    const loginSuccessful = await httpClient.login();

    console.log('logged in successful', loginSuccessful);

    const { resultPromise, cancel } = queryClient.executeQuery({
        dataSource: 'nfl',
        attributes: [
            DM.player_stats.Name
        ],
        measures: [],
        filters: [],
        highlights: [],
    })

    const result = await resultPromise;

    const names = result.rows.map(row => row[0].data);

    console.log("Compiling Trie");
    const start = Date.now();
    searchTrie.insertMany(names);
    const end = Date.now();
    console.log("Compiled Trie in", end - start, "ms");
    console.log("Trie Depth", searchTrie.maxDepth());
}

main();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    switch (message.type) {
        case 'find-matches':
            const matches = searchTrie.searchInText(message.payload);
            if (matches.length > 0) sendResponse({ type: 'found-matches', payload: matches });
            break;
        default:
            console.log("unknown message type", message)
    }
})
