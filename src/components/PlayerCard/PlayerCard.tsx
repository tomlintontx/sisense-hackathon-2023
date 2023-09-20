
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
import { Chart, ThemeProvider, useExecuteQuery } from '@sisense/sdk-ui';
import * as DM from '../../nfl_data.ts'
import { measures, filters, Measure } from '@sisense/sdk-data';

// import './PlayerCard.css'
import {css} from '@emotion/react'

const cardContainer = css`

perspective: 1000px;
height: 350px;
width: 600px;

.card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card.flipped {
  transform: rotateX(180deg);
}

.cardFront,
.cardBack {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.cardFront {
  transform: rotateX(0deg);
  visibility: visible;
}

.cardBack {
  transform: rotateX(180deg);
  visibility: hidden;
  /* This will hide the card back by default */
}

.card.flipped .cardFront {
  visibility: hidden;
}

.card.flipped .cardBack {
  visibility: visible;
}

`


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
  'QB': ['passing Yards', 'passing Touchdowns', 'rushing Yards', 'QBRating', 'passing Yards At Catch', 'completion Pct', 'fumbles'],
  'RB': ['rushing Yards', 'rushing Touchdowns', 'receiving Yards', 'receiving Touchdowns', 'fumbles', 'rushing First Downs', 'rushing Big Plays'],
  'WR': ['receiving Yards', 'receiving Touchdowns', 'receptions', 'receiving Yards At Catch', 'receiving Yards Big Plays', 'receiving First Downs'],
  'TE': ['receiving Yards', 'receiving Touchdowns', 'receptions', 'receiving Yards At Catch', 'receiving Yards Big Plays', 'receiving First Downs'],
  'PK': ['field Goals Made', 'field Goal Pct', 'field Goals Made 50'],
  'P': ['punts', 'punts Inside 10 Pct'],
  'LB': ['solo Tackles', 'sacks', 'interceptions', 'fumbled Forced'],
  'CB': ['interceptions', 'sacks', 'solo Tackles', 'fumbled Forced']
};

type PlayerMeasure = {
  value: Measure;
};

const positionToMeasure: Record<string, PlayerMeasure> = {
  'QB': {
    value: measures.sum(DM.PlayerStats.passingTouchdowns)
  },
  'CB': {
    value: measures.sum(DM.PlayerStats.interceptions)
  },
  'P': {
    value: measures.sum(DM.PlayerStats.punts)
  },
  'PK': {
    value: measures.sum(DM.PlayerStats.fieldGoalsMade)
  },
  'RB': {
    value: measures.sum(DM.PlayerStats.rushingYards)
  },
  'WR': {
    value: measures.sum(DM.PlayerStats.receivingYards)
  },
  'TE': {
    value: measures.sum(DM.PlayerStats.receivingYards)
  },
  'LB': {
    value: measures.sum(DM.PlayerStats.soloTackles)
  }
};


function PlayerCard({ player }: PlayerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const { data } = useExecuteQuery({
    dataSource: DM.DataSource,
    dimensions: [
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
      measures.sum(DM.PlayerStats.completionPct),
      measures.sum(DM.PlayerStats.fumbles),
      measures.sum(DM.PlayerStats.passingYardsAtCatch),
      measures.sum(DM.PlayerStats.rushingFirstDowns),
      measures.sum(DM.PlayerStats.rushingBigPlays),
      measures.sum(DM.PlayerStats.receivingBigPlays),
      measures.sum(DM.PlayerStats.receivingYardsAtCatch),
      measures.sum(DM.PlayerStats.receivingFirstDowns)
    ],
    filters: [
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
  formattedData.sumsoloTackles = intlFmt.format(Number(formattedData.sumsoloTackles))
  formattedData.sumreceivingYards = intlFmt.format(Number(formattedData.sumreceivingYards))
  formattedData.sumfieldGoalPct = formattedData['sumfieldGoalPct']?.substring(0, 4) + "%"
  formattedData.puntsInside10Pct = formattedData['puntsInside10Pct']?.substring(0, 4) + "%"

  const currentMeasure = positionToMeasure[formattedData.position_abbr!];

  console.log(currentMeasure)

  return (
    <Box css={cardContainer}>
      <Card
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
        sx={{
          boxShadow: 4
        }}
      /* style={{ height: '100vh' }} */
      >
        {/* Front of the Card */}
        <CardContent className="cardFront"
          sx={{
            padding: 0
          }}
        >
          <Box position="relative" height={70} marginBottom={2} paddingTop={1}
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
                width: 100,
                height: 100,
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
              Active {formattedData.position_abbr} Career Leaders
            </Typography>
            <ThemeProvider
              theme={{
                palette: {
                  variantColors: ['#' + formattedData.color]
                }
              }}
            >
              <Chart
                dataSet={DM.DataSource}
                chartType={'bar'}
                dataOptions={{
                  category: [DM.players.fullName],
                  value: [currentMeasure.value],
                  breakBy: [],
                }}
                filters={[
                  filters.equals(DM.players.position_abbr, formattedData.position_abbr!),
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
            </ThemeProvider>
          </Box>

        </CardContent>


      </Card>
    </Box>
  );
};

export default PlayerCard;
