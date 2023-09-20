import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Player } from './components/PlayerCard/PlayerCard.tsx';
import PlayerCard from './components/PlayerCard/PlayerCard.tsx';
import { ExecuteQuery, SisenseContextProvider } from '@sisense/sdk-ui';
import * as DM from './nfl_data.ts'
import { filters } from '@sisense/sdk-data';
import { measures } from '@sisense/sdk-data';

const sisenseApiKey = import.meta.env.VITE_SISENSE_API_KEY
const sisenseUrl = import.meta.env.VITE_SISENSE_URL

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SisenseContextProvider
      url= {sisenseUrl}
      token= {sisenseApiKey}
    >
      <ExecuteQuery
        dataSource={DM.DataSource}
        dimensions={[
          DM.players.fullName,
          DM.teams.color,
          DM.teams.alternateColor,
          DM.teams.logo_url,
          DM.players.position_abbr,
          DM.players.players_id
        ]}
        measures={[
          measures.sum(DM.PlayerStats.passingTouchdowns),
          measures.sum(DM.PlayerStats.passingYards),
          measures.sum(DM.PlayerStats.rushingYards)
        ]}
        filters={[
          filters.contains(DM.players.fullName,'Josh Allen'),
        ]}
        >
          {
          (data) => {
              if (data) {
                  return <PlayerCard player={data} />;
              }
          }
          }
      </ExecuteQuery>
    </SisenseContextProvider>  
  </React.StrictMode>,
)
