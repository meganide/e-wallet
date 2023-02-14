import * as Styled from '../../styles/elements';

interface IProps {
  heading: string;
  statusText: string;
}

function Top(props: IProps) {
  const {heading, statusText} = props;
  return (
    <>
      <Styled.H1>{heading}</Styled.H1>
      <Styled.SecondaryParagraph>{statusText}</Styled.SecondaryParagraph>
    </>
  );
}

export default Top;
