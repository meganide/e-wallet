import styled from 'styled-components';

interface IProps {
  cardNumber: number;
}

const Container = styled.section`
  margin-top: 2rem;
  position: relative;
  height: ${(props: IProps) => `${241 + (props.cardNumber - 2)*65}px`};
`;

export { Container };
