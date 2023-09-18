import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import PricingCardsList from './components/PricingCardsList.tsx'
import { Container, Box } from '@mui/material';
import { PricingCardProps } from './components/PricingCard.tsx';
import { Player } from './components/PlayerCard.tsx';
import PlayerCard from './components/PlayerCard.tsx';

const data: PricingCardProps[] = [
  {
    flightTime:"7:05AM - 9:00AM", 
    airline:"United",
    duration:"1 hr 55 mins", 
    flightType:"non-stop", 
    price:436,
    bottomDuration:'SAT-DEN',
    bottomFlightType:'UA2367'
  },
  {
    flightTime:"7:05AM - 9:00AM", 
    airline:"United",
    duration:"1 hr 55 mins", 
    flightType:"non-stop", 
    price:436,
    bottomDuration:'SAT-DEN',
    bottomFlightType:'UA2367'
  },
  {
    flightTime:"7:05AM - 9:00AM", 
    airline:"United",
    duration:"1 hr 55 mins", 
    flightType:"non-stop", 
    price:436,
    bottomDuration:'SAT-DEN',
    bottomFlightType:'UA2367'
  }
]

const playerData: Player = {
  name: 'Tom Brady',
  position: 'Quarterback',
  imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/221028100056-brady-sacked-tease.jpg?c=original',
  stats: [
    { label: 'Passing Yards', value: '4633' },
    { label: 'Touchdowns', value: '40' },
    { label: 'Interceptions', value: '12' },
    // ... Add more stats as needed
  ],
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlayerCard player={playerData} />
  </React.StrictMode>,
)
