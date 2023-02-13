import * as HomeStyled from './Home.styles';
import * as elementsStyled from '../../styles/elements.js';

import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack.js';
import { cardVendors } from '../../utils/cardVendors.js';

const Styled = { ...elementsStyled, ...HomeStyled };

function Home() {
  return (
    <Styled.Container>
      <Styled.H1>E-wallet</Styled.H1>
      <Styled.SecondaryParagraph>Active Card</Styled.SecondaryParagraph>
      <Card cardData={cardVendors[0]} />
      <CardStack />
    </Styled.Container>
  );
}

export default Home;
