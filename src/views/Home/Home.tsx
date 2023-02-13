import * as Styled from '../../styles/elements.js';

import Card from '../../components/Card/Card';

function Home() {
  return (
    <section>
      <Styled.H1>E-wallet</Styled.H1>
      <Styled.SecondaryParagraph>Active Card</Styled.SecondaryParagraph>
      <Card />
    </section>
  );
}

export default Home;
