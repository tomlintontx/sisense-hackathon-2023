import React from 'react'
import ReactDOM from 'react-dom/client'
import { Player } from './components/PlayerCard.tsx';
import PlayerCard from './components/PlayerCard.tsx';
import { ExecuteQuery, SisenseContextProvider } from '@sisense/sdk-ui';
import * as DM from './nfl_data.ts'
import { filters } from '@sisense/sdk-data';
import { measures } from '@sisense/sdk-data';

const sisenseApiKey = import.meta.env.VITE_SISENSE_API_KEY
const sisenseUrl = import.meta.env.VITE_SISENSE_URL

const playerData: Player = {
  name: 'Dak Prescott',
  position: 'Quarterback',
  imageUrl: 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/knx0jxponzfkusnyvjkn',
  stats: [
    { label: 'Passing Yards', value: '4633' },
    { label: 'Touchdowns', value: '40' },
    { label: 'Interceptions', value: '12' },
    // ... Add more stats as needed
  ],
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SisenseContextProvider
      url= {sisenseUrl}
      token= {sisenseApiKey}
    >
      <ExecuteQuery
        dataSource={DM.DataSource}
        dimensions={[
          DM.player_stats.Name,
          DM.player_images.img_url,
          DM.teamcolors.color,
          DM.teamcolors.color2,
          DM.logos.team_logo,
          DM.player_stats.Position
        ]}
        measures={[
          measures.sum(DM.player_stats.FantasyPoints),
          measures.sum(DM.player_stats.PassingYards),
          measures.sum(DM.player_stats.PassingTouchdowns)
        ]}
        filters={[
          filters.contains(DM.player_stats.Name,'Kirk Cousins'),
          filters.equals(DM.player_stats.Season,'2023')
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
