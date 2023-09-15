import React from 'react'
import ReactDOM from 'react-dom/client'
import Analytics from './components/Analytics.tsx'
import Navbar from './components/Navbar.tsx'
import PricingCard from './components/PricingCard.tsx'
import { Container, Box } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Navbar />
      <Container>
        <Box display="flex" justifyContent="center" mt={10}> {/* Added some margin to give space below navbar */}
        <PricingCard 
          topText="7:05AM - 9:00AM" 
          bottomText="United" 
          duration="1 hr 55 mins" 
          flightType="non-stop" 
          price={436}
          bottomDuration='SAT-DEN'
          bottomFlightType=''
        />
        </Box>
      </Container>
  </React.StrictMode>,
)
