import { useState } from 'react';
import { helloFromUtils, ohtherHi } from './utils/helpers';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;

  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: tomato;
  padding: 20px;
  border: 2px solid black;
`;

function App() {
  helloFromUtils();
  ohtherHi();

  const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <H1>Hello from biggest proyect.</H1>
      <Button onClick={() => alert('Hi button bby ')}>Check in</Button>
      <Button onClick={() => alert('Hi button bby ')}>Check out</Button>
      <Input type="number" placeholder="Numbver of guests"></Input>
    </StyledApp>
  );
}

export default App;
