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

    // const ac = new AbortController();
    // ac.signal.

    const result = await resultPromise;

    console.log({ result })
    // const fields = await queryClient.getDataSourceFields('nfl')

    // console.log({ fields })



    // console.log({ ComposeSdkRestClient, ComposeSdkQueryClient })
    // const auth = ComposeSdkRestClient.getAuthenticator(
    //     /* url */ import.meta.env.VITE_SISENSE_URL,
    //     /* username */ undefined,
    //     /* password */ undefined,
    //     /* token */ import.meta.env.VITE_SISENSE_TOKEN,
    //     /* wat */ undefined,
    //     /* ssoEnabled */ undefined,
    // )

    // console.log({ auth })
    // console.log(createClientApplication)
    // const app = await createClientApplication({
    //     url: import.meta.env.VITE_SISENSE_URL,
    //     token: import.meta.env.VITE_SISENSE_TOKEN,
    // })
}
main();





// chrome.runtime.onConnect.addListener((port) => {


//     // port.

//     // { action: 'get-player-names', asdfasdf}

// })
