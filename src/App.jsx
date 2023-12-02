import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import CalculatedAge from "./components/CalculatedAge";
import BirthdayForm from "./components/BirthdayForm";
import { useState } from "react";
import Footer from "./components/Footer";

const StyledApp = styled.main`
  background-color: var(--color-white);
  padding: 2rem;
  height: 65.5rem;
  width: 84rem;
  font-style: italic;
  border-radius: 24px 24px 200px 24px;
  display: grid;
  grid-template-rows: 40% 60%;
  position: relative;
  margin-top: 4rem;

  @media only screen and (max-width: 25em) {
    height: 86rem;
    width: 64rem;
    border-radius: 24px 24px 110px 24px;
    grid-template-rows: 50% 50%;
    padding: 1rem;
    margin-top: 0;
  }
`;

function App() {
  const [ageDays, setAgeDays] = useState("");

  const [ageMonths, setAgeMonths] = useState("");

  const [ageYears, setAgeYears] = useState("");

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <BirthdayForm
          setAgeDays={setAgeDays}
          setAgeMonths={setAgeMonths}
          setAgeYears={setAgeYears}
        />

        <CalculatedAge
          ageDays={ageDays}
          ageMonths={ageMonths}
          ageYears={ageYears}
        />
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;
