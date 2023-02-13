import * as Styled from './CardStack.styles';

import Card from '../Card/Card';

interface IProps {
  cardVendors: ICardVendors[];
  setCardVendors: React.Dispatch<React.SetStateAction<ICardVendors[]>>;
}

interface ICardVendors {
  vendor: string;
  iconPathUrl: string;
  cardNumber: string;
  cardholderName: string;
  validThru: string;
}

function CardStack(props: IProps) {
  const { cardVendors, setCardVendors } = props;

  function handleSetActiveCard(fromIndex: number) {
    const target = cardVendors.splice(fromIndex, 1)[0];
    setCardVendors([target, ...cardVendors]);
  }

  return (
    <Styled.Container cardNumber={cardVendors.length}>
      {cardVendors.map((card, index) => {
        if (index === 0) return;
        return (
          <Card
            key={card.cardNumber}
            cardData={card}
            isStack
            cardNumber={index}
            onClick={() => handleSetActiveCard(index)}
          />
        );
      })}
    </Styled.Container>
  );
}

export default CardStack;
