import * as Styled from './CardStack.styles';

import Card from '../Card/Card';
import { ICardData } from './../../utils/interfaces';

interface IProps {
  cardVendors: ICardData[];
  setCardVendors: React.Dispatch<React.SetStateAction<ICardData[] | []>>;
}

function CardStack(props: IProps) {
  const { cardVendors, setCardVendors } = props;

  function handleSetActiveCard(fromIndex: number) {
    const target = cardVendors.splice(fromIndex, 1)[0];
    const cardArray = [target, ...cardVendors];
    setCardVendors(cardArray);
    localStorage.setItem('cards', JSON.stringify(cardArray));
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
