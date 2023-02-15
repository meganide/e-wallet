import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
  text-transform: uppercase;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.1rem;
`;

const Input = styled.input`
  text-transform: uppercase;
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

export { Form, Label, Input, Select };
