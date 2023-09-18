import React from 'react';
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
  const { columns, rows } = player;

  let formattedData = rows.map(row => {
      return row.reduce((acc, cell, index) => {
          acc[columns[index].name.replace(/ +/g, "")] = cell.text;
          return acc;
      }, {});
  });

  console.log(formattedData)

  return (
    <Card>
      <CardContent>
        <Box position="relative" height={60} marginBottom={2}  // Assign a fixed height
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
                    top: -10,    // Adjust this to get desired vertical positioning
                    right: 10,  // Adjust this to get desired horizontal positioning
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
    </Card>
  );
};

export default PlayerCard