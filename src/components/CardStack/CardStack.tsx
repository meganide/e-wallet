import * as Styled from './CardStack.styles';

import Card from '../Card/Card';
import { cardVendors } from '../../utils/cardVendors';

function CardStack() {
  return (
    <Styled.Container>
      {cardVendors.map((card, index) => {
        return <Card key={card.cardNumber} cardData={card} isStack cardNumber={index} />;
      })}
    </Styled.Container>
  );
}

export default CardStack;
