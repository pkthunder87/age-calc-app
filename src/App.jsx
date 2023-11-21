import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import CalculatedAge from "./components/CalculatedAge";
import BirthdayForm from "./components/BirthdayForm";

const StyledApp = styled.main`
  background-color: var(--color-white);
  padding: 2rem;
  height: 65.5rem;
  width: 84rem;
  font-style: italic;
  border-radius: 24px 24px 200px 24px;
  display: grid;
  grid-template-rows: 40% 60%;
`;

// const H1 = styled.h1`
//   font-size: 4rem;
//   font-weight: 700;
//   ${test}
// `;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <BirthdayForm />
        <CalculatedAge />
      </StyledApp>
    </>
  );
}

export default App;
