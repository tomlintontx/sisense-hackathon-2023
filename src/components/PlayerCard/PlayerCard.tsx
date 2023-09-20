import React, { useState } from 'react';
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
import { Chart } from '@sisense/sdk-ui';
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
  player: QueryData;
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

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { columns, rows } = player;

  let formattedData = rows.map(row => {
    return row.reduce((acc, cell, index) => {
      acc[columns[index].name.replace(/ +/g, "")] = cell.text;
      return acc;
    }, {});
  });

  formattedData[0].sumpassingYards = new Intl.NumberFormat('en-us',{}).format(formattedData[0].sumpassingYards)
  formattedData[0].sumrushingYards = new Intl.NumberFormat('en-us').format(formattedData[0].sumrushingYards)
  formattedData[0].sumsoloTackles = new Intl.NumberFormat('en-us').format(formattedData[0].sumsoloTackes)
  formattedData[0].sumreceivingYards = new Intl.NumberFormat('en-us').format(formattedData[0].sumreceivingYards)
  formattedData[0].sumpuntsInside10Pct = formattedData[0].sumpuntsInside10Pct + "%"
  formattedData[0].sumfieldGoalPct = formattedData[0].sumfieldGoalPct + "%"

  return (
    <Box className="cardContainer">
      <Card
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ height: '100vh' }}
      >
        {/* Front of the Card */}
        <CardContent className="cardFront">
          <Box position="relative" height={60} marginBottom={2}
            style={{ background: `linear-gradient(to right, ${"#" + formattedData[0].color}, ${"#" + formattedData[0].alternateColor})` }}>

            {/* Left side content */}
            <Box display="flex" alignItems="center" height="100%" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Avatar src={"https://a.espncdn.com/i/headshots/nfl/players/full/" + formattedData[0].players_id + ".png"} alt={formattedData[0].fullName} style={{ width: 60, height: 60, marginRight: 15 }} />
                <Box>
                  <Typography variant="h5" component="div" color="white">
                    {formattedData[0].fullName}
                  </Typography>
                  <Typography variant="subtitle1" color="white">
                    {formattedData[0].position_abbr}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Floating secondary avatar */}
            <Avatar src={formattedData[0].logo_url} alt="Secondary Avatar"
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
              {positionToStats[formattedData[0].position_abbr].map((stat) => (
                <TableRow key={stat}>
                  <TableCell>{capitalizeWords(stat)}</TableCell>
                  <TableCell>{formattedData[0][`sum${stat.replace(' ', '')}`]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>

        {/* Back of the Card */}
        <CardContent className="cardBack" style={{ display: 'flex' }}>
          <img
            src={"https://a.espncdn.com/i/headshots/nfl/players/full/" + formattedData[0].players_id + ".png"}
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
