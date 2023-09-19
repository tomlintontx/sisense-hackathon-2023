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

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { columns, rows } = player;

  let formattedData = rows.map(row => {
    return row.reduce((acc, cell, index) => {
      acc[columns[index].name.replace(/ +/g, "")] = cell.text;
      return acc;
    }, {});
  });

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
            style={{ background: `linear-gradient(to right, ${formattedData[0].color}, ${formattedData[0].color2})` }}>

            {/* Left side content */}
            <Box display="flex" alignItems="center" height="100%" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Avatar src={formattedData[0].img_url} alt={formattedData[0].text} style={{ width: 60, height: 60, marginRight: 15 }} />
                <Box>
                  <Typography variant="h5" component="div" color="white">
                    {formattedData[0].Name}
                  </Typography>
                  <Typography variant="subtitle1" color="white">
                    {formattedData[0].Position}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Floating secondary avatar */}
            <Avatar src={formattedData[0].team_logo} alt="Secondary Avatar"
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
              <TableRow>
                <TableCell>Passing Yards</TableCell>
                <TableCell>{formattedData[0].sumPassingYards}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passing TDs</TableCell>
                <TableCell>{formattedData[0].sumPassingTouchdowns}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fantasy Points</TableCell>
                <TableCell>{Math.round(formattedData[0].sumFantasyPoints)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>

        {/* Back of the Card */}
        <CardContent className="cardBack" style={{ display: 'flex' }}>
          <img
            src={formattedData[0].img_url}
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
              Top 10 QBs 2023
            </Typography>
            <Chart
              dataSet={DM.DataSource}
              chartType={'bar'}
              dataOptions={{
                category: [DM.player_stats.Name],
                value: [measures.sum(DM.player_stats.FantasyPoints, 'Fantasy Points')],
                breakBy: [],
              }}
              filters={[
                filters.equals(DM.player_stats.Season, '2023'),
                filters.equals(DM.player_stats.Position, 'QB'),
                filters.topRanking(DM.player_stats.Name, measures.sum(DM.player_stats.FantasyPoints), 8)
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
