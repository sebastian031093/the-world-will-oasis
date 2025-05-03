// import { useState } from 'react';
import { helloFromUtils, ohtherHi } from './utils/helpers';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStlyes';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.main`
  background-color: tomato;
  padding: 20px;
  border: 8px solid black;
`;

function App() {
  helloFromUtils();
  ohtherHi();

  // const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello from biggest proyect.</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert('Hi button bby ')}>Check in</Button>
              <Button
                variations="danger"
                onClick={() => alert('Hi button bby ')}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h2">Form</Heading>

            <div>
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
