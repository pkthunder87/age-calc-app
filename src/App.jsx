import styled, { css } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const test = css`
  text-align: center;
`;

const StyledApp = styled.main`
  background-color: var(--color-purple);
  padding: 2rem;
  height: 65.5rem;
  width: 84.5rem;
  font-style: italic;
  border-radius: 24px 24px 200px 24px;
`;

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  ${test}
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
