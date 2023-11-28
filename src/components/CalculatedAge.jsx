import styled from "styled-components";

function CalculatedAge({ ageDays, ageMonths, ageYears }) {
  const StyledCalculatedAge = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3.6rem;
    letter-spacing: -1px;
  `;

  const Date = styled.h2`
    font-size: 10.3rem;
    font-weight: 800;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    margin-top: -3.2rem;
    margin-bottom: -1.1rem;
  `;

  const Age = styled.p`
    color: var(--color-purple);
    font-size: 10rem;
  `;

  return (
    <StyledCalculatedAge>
      <Date>
        <Age>{ageYears ? ageYears : "- -"}</Age>years
      </Date>
      <Date>
        <Age>{ageMonths ? ageMonths : "- -"}</Age>months
      </Date>
      <Date>
        <Age>{ageDays ? ageDays : "- -"}</Age>days
      </Date>
    </StyledCalculatedAge>
  );
}

export default CalculatedAge;
