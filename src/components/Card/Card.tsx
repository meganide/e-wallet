import * as CardStyled from './Card.styles';
import * as ElementsStyled from '../../styles/elements.js';

const Styled = { ...CardStyled, ...ElementsStyled };

function Card() {
  return (
    <Styled.Card background="#ffae34">
      <Styled.CardHeader>
        <Styled.Image src="/assets/chip-dark.svg" />
        <Styled.Image src="/assets/vendor-bitcoin.svg" />
      </Styled.CardHeader>
      <Styled.Paragraph margin="0.8rem 0">1234 5678 9101 5432</Styled.Paragraph>
      <Styled.CardFooter>
        <Styled.FlexColumn>
          <Styled.Paragraph fontSize="0.75rem" color="rgba(0,0,0,0.8)">
            CARDHOLDER NAME
          </Styled.Paragraph>
          <Styled.Paragraph fontSize="1.125rem" color="rgba(0,0,0,0.8)">
            renas hassan
          </Styled.Paragraph>
        </Styled.FlexColumn>
        <Styled.FlexColumn alignItems='flex-end'>
          <Styled.Paragraph fontSize="0.75rem" color="rgba(0,0,0,0.8)">
            VALID THRU
          </Styled.Paragraph>
          <Styled.Paragraph fontSize="1.125rem" color="rgba(0,0,0,0.8)">
            12/22
          </Styled.Paragraph>
        </Styled.FlexColumn>
      </Styled.CardFooter>
    </Styled.Card>
  );
}

export default Card;
