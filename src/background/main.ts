import { BearerAuthenticator, HttpClient } from "@sisense/sdk-rest-client";
import { DimensionalQueryClient, type QueryDescription } from "@sisense/sdk-query-client";

import * as DM from '../nfl_data'

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

    console.log({ result })
}

main();

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     switch (message.type) {
//         case 'request-type': 
//             sendResponse({ type: 'response-type', ... })
//         ...
//     }
// })



// chrome.runtime.onConnect.addListener((port) => {


//     // port.

//     // { action: 'get-player-names', asdfasdf}

// })
