import styled from 'styled-components';

import { Calendar } from "./components/Calendar";


function App() {
  return (
    <Container>
      <Calendar />

    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`

export default App;
