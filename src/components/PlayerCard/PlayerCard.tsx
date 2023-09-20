import React, { useDebugValue, useEffect, useMemo, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Box
} from '@mui/material';
import './PlayerCard.css'
import { Chart, useExecuteQuery } from '@sisense/sdk-ui';
import * as DM from '../../nfl_data.ts'
import { measures, filters } from '@sisense/sdk-data';

// Define your types
interface Stat {
  label: string;
  value: string;
}

type Column = {
  name: string;
  type: string;
}
type Row = Line[]
type Line = any

type QueryData = {
  columns: Column[];
  rows: Row[];
};

export interface Player {
  name: string;
  position: string;
  imageUrl: string;
  stats: Stat[];
}

interface PlayerCardProps {
  player: string;
}

function capitalizeWords(input: string): string {
  return input.replace(/\b(\w)/g, char => char.toUpperCase());
}


const positionToStats: Record<string, string[]> = {
  'QB': ['passing Yards', 'passing Touchdowns', 'rushing Yards', 'QBRating'],
  'RB': ['rushing Yards', 'rushing Touchdowns', 'receiving Yards', 'receiving Touchdowns'],
  'WR': ['receiving Yards', 'receiving Touchdowns', 'receptions'],
  'TE': ['receiving Yards', 'receiving Touchdowns', 'receptions'],
  'PK': ['field Goals Made', 'field Goal Pct', 'field Goals Made 50'],
  'P': ['punts', 'punts Inside 10 Pct'],
  'LB': ['solo Tackles', 'sacks', 'interceptions', 'fumbled Forced'],
  'CB': ['solo Tackles', 'sacks', 'interceptions', 'fumbled Forced']
};

function PlayerCard({  player   }: PlayerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const { data } = useExecuteQuery({
    dataSource: DM.DataSource,
        dimensions:[
          DM.players.fullName,
          DM.teams.color,
          DM.teams.alternateColor,
          DM.teams.logo_url,
          DM.players.position_abbr,
          DM.players.players_id
        ],
        measures: [
          measures.sum(DM.PlayerStats.passingTouchdowns),
          measures.sum(DM.PlayerStats.passingYards),
          measures.sum(DM.PlayerStats.rushingYards),
          measures.sum(DM.PlayerStats.QBRating),
          measures.sum(DM.PlayerStats.sacks),
          measures.sum(DM.PlayerStats.soloTackles),
          measures.sum(DM.PlayerStats.interceptions),
          measures.sum(DM.PlayerStats.fieldGoalsMade50),
          measures.sum(DM.PlayerStats.fieldGoalsMade),
          measures.sum(DM.PlayerStats.rushingTouchdowns),
          measures.sum(DM.PlayerStats.receivingYards),
          measures.sum(DM.PlayerStats.receivingTouchdowns),
          measures.sum(DM.PlayerStats.receptions),
          measures.sum(DM.PlayerStats.fieldGoalPct),
          measures.sum(DM.PlayerStats.punts),
          measures.sum(DM.PlayerStats.puntsInside10Pct),
          measures.sum(DM.PlayerStats.fumblesForced),
        ],
        filters:[
          filters.contains(DM.players.fullName, player ?? 'Cooper Kupp'),
        ]
  })

  // if (!data) return (<pre>Loading...</pre>);
  if (!data) return null;

  const { columns, rows } = data;

  let [formattedData] = rows.map(row => 
    Object.fromEntries(row.map((cell, index) => 
       [columns[index].name.replace(/ +/g, ""), cell.text]
    ))
  );

  if (!formattedData) return null;

  console.log(formattedData)
  // debugger
  // useEffect(() => {
  // }, [formattedData])

  const intlFmt = new Intl.NumberFormat('en-us')

  formattedData.sumpassingYards = intlFmt.format(Number(formattedData.sumpassingYards))
  formattedData.sumrushingYards = intlFmt.format(Number(formattedData.sumrushingYards))
  formattedData.sumsoloTackles = intlFmt.format(Number(formattedData.sumsoloTackes))
  formattedData.sumreceivingYards = intlFmt.format(Number(formattedData.sumreceivingYards))
  formattedData.sumfieldGoalPct = formattedData['sumfieldGoalPct']?.substring(0,4) + "%"
  formattedData.puntsInside10Pct = formattedData['puntsInside10Pct']?.substring(0,4) + "%"
  
  
  return (
    <Box className="cardContainer">
      <Card
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
        /* style={{ height: '100vh' }} */
      >
        {/* Front of the Card */}
        <CardContent className="cardFront">
          <Box position="relative" height={60} marginBottom={2}
            style={{ background: `linear-gradient(to right, ${"#" + formattedData.color}, ${"#" + formattedData.alternateColor})` }}>

            {/* Left side content */}
            <Box display="flex" alignItems="center" height="100%" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Avatar src={"https://a.espncdn.com/i/headshots/nfl/players/full/" + formattedData.players_id + ".png"} alt={formattedData.fullName} style={{ width: 60, height: 60, marginRight: 15 }} />
                <Box>
                  <Typography variant="h5" component="div" color="white">
                    {formattedData.fullName}
                  </Typography>
                  <Typography variant="subtitle1" color="white">
                    {formattedData.position_abbr}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Floating secondary avatar */}
            <Avatar src={formattedData.logo_url} alt="Secondary Avatar"
              style={{
                width: 80,
                height: 80,
                position: 'absolute',
                top: -10,
                right: 10,
                zIndex: 1
              }}
            />
          </Box>

          <Table size="small">
            <TableBody>
              {positionToStats[formattedData.position_abbr!].map((stat) => (
                <TableRow key={stat}>
                  <TableCell>{capitalizeWords(stat)}</TableCell>
                  <TableCell>{formattedData[`sum${stat.replace(/ /g, '')}`]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>

        {/* Back of the Card */}
        <CardContent className="cardBack" style={{ display: 'flex' }}>
          <img
            src={"https://a.espncdn.com/i/headshots/nfl/players/full/" + formattedData.players_id + ".png"}
            alt="Background Description"
            style={{
              height: '100%',
              width: '50%', // Takes up half the width
              objectFit: 'cover', // This behaves like `background-size: cover;`
              zIndex: -1 // Ensures the image stays behind the content
            }}
          />
          <Box style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h5" component="div" color="black" style={{ marginBottom: '16px' }}>
              Career Stats Active QBs
            </Typography>
            <Chart
              dataSet={DM.DataSource}
              chartType={'bar'}
              dataOptions={{
                category: [DM.players.fullName],
                value: [measures.sum(DM.PlayerStats.passingTouchdowns, 'Passing TDs')],
                breakBy: [],
              }}
              filters={[
                filters.equals(DM.players.position_abbr, 'QB'),
                filters.topRanking(DM.players.fullName, measures.sum(DM.PlayerStats.passingTouchdowns), 5)
              ]}
              styleOptions={{
                legend: {
                  enabled: true,
                  position: 'bottom',
                },
              }}
              onDataPointClick={(point, nativeEvent) => {
                console.log('clicked', point, nativeEvent);
              }}
            />
          </Box>

        </CardContent>


      </Card>
    </Box>
  );
};

export default PlayerCard;
