import PricingCard, { PricingCardProps } from './PricingCard';  // Assuming PricingCard is in the same directory

export interface PricingCardsListProps {
  cardsData: PricingCardProps[];  // An array of objects based on PricingCardProps
}

const PricingCardsList: React.FC<PricingCardsListProps> = ({ cardsData }) => {
  return (
    <div>
      {cardsData.map((card, index) => (
        <PricingCard 
          key={index} 
          topText={card.topText}
          bottomText={card.bottomText}
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
