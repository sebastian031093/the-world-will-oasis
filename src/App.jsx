import { useState } from 'react';
import { helloFromUtils, ohtherHi } from './utils/helpers';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStlyes';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background-color: tomato;
  padding: 20px;
  border: 8px solid black;
`;

function App() {
  helloFromUtils();
  ohtherHi();

  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <H1>Hello from biggest proyect.</H1>
        <Button onClick={() => alert('Hi button bby ')}>Check in</Button>
        <Button onClick={() => alert('Hi button bby ')}>Check out</Button>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
