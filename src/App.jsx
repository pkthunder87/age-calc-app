import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.main`
  background-color: var(--color-purple);
  padding: 2rem;
  font-style: italic;
`;

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`;

const Inputs = styled.input`
  font-size: 3.2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Age Calculator App</H1>
      </StyledApp>
    </>
  );
}

export default App;
