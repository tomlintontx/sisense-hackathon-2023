import React from 'react'
import ReactDOM from 'react-dom/client'
import PlayerCard from './components/PlayerCard/PlayerCard.tsx';
import {  SisenseContextProvider } from '@sisense/sdk-ui';

const sisenseApiKey = import.meta.env.VITE_SISENSE_API_KEY ?? import.meta.env.VITE_SISENSE_TOKEN
const sisenseUrl = import.meta.env.VITE_SISENSE_URL

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SisenseContextProvider
      url= {sisenseUrl}
      token= {sisenseApiKey}
    >
      <PlayerCard player='Aaron Rodgers' />
    </SisenseContextProvider>  
  </React.StrictMode>,
)
