import PricingCard, { PricingCardProps } from './PricingCard'; 

export interface PricingCardsListProps {
  cardsData: PricingCardProps[];  // An array of objects based on PricingCardProps
}

const PricingCardsList: React.FC<PricingCardsListProps> = ({ cardsData }) => {
  return (
    <div>
      {cardsData.map((card, index) => (
        <PricingCard 
          key={index} 
          flightTime={card.flightTime}
          airline={card.airline}
          duration={card.duration}
          flightType={card.flightType}
          price={card.price}
          bottomDuration={card.bottomDuration}
          bottomFlightType={card.bottomFlightType}
        />
      ))}
    </div>
  );
}

export default PricingCardsList;
