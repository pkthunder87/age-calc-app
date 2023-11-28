import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import CalculatedAge from "./components/CalculatedAge";
import BirthdayForm from "./components/BirthdayForm";
import { useState } from "react";

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
      </StyledApp>
    </>
  );
}

export default App;
