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

export interface Player {
  name: string;
  position: string;
  imageUrl: string;
  stats: Stat[];
}

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar src={player.imageUrl} alt={player.name} style={{ width: 60, height: 60, marginRight: 15 }} />
          <Box>
            <Typography variant="h5" component="div">
              {player.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {player.position}
            </Typography>
          </Box>
        </Box>
        <Table size="small">
          <TableBody>
            {player.stats.map((stat, index) => (
              <TableRow key={index}>
                <TableCell>{stat.label}</TableCell>
                <TableCell>{stat.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
