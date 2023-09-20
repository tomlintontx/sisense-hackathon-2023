import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Player } from './components/PlayerCard/PlayerCard.tsx';
import PlayerCard from './components/PlayerCard/PlayerCard.tsx';
import { ExecuteQuery, SisenseContextProvider } from '@sisense/sdk-ui';
import * as DM from './nfl_data.ts'
import { filters } from '@sisense/sdk-data';
import { measures } from '@sisense/sdk-data';

const sisenseApiKey = import.meta.env.VITE_SISENSE_API_KEY ?? import.meta.env.VITE_SISENSE_TOKEN
const sisenseUrl = import.meta.env.VITE_SISENSE_URL

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SisenseContextProvider
      url= {sisenseUrl}
      token= {sisenseApiKey}
    >
      <PlayerCard player='Patrick Mahomes' />
    </SisenseContextProvider>  
  </React.StrictMode>,
)
