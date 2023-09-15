import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import PricingCardsList from './components/PricingCardsList.tsx'
import { Container, Box } from '@mui/material';
import { PricingCardProps } from './components/PricingCard.tsx';

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Navbar />
      <Container>
        <Box display="flex" justifyContent="center" mt={10}> {/* Added some margin to give space below navbar */}
        <PricingCardsList cardsData={data} />
        </Box>
      </Container>
  </React.StrictMode>,
)
