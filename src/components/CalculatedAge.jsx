import styled from "styled-components";
import { useSpring, animated } from "react-spring";

// From Basir - https://youtu.be/SsDtEq50xiQ
function AnimatedNumber({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function CalculatedAge({ ageDays, ageMonths, ageYears }) {
  const StyledCalculatedAge = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3.6rem;
    letter-spacing: -1px;

    @media only screen and (max-width: 25em) {
      margin-top: 1.8rem;
    }
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
        <Age>
          {ageYears === 0 ? (
            ageYears
          ) : ageYears ? (
            <AnimatedNumber n={ageYears} />
          ) : (
            "- -"
          )}
        </Age>
        years
      </Date>
      <Date>
        <Age>
          {ageMonths === 0 ? (
            ageMonths
          ) : ageMonths ? (
            <AnimatedNumber n={ageMonths} />
          ) : (
            "- -"
          )}
        </Age>
        months
      </Date>
      <Date>
        <Age>
          {ageDays === 0 ? (
            ageDays
          ) : ageDays ? (
            <AnimatedNumber n={ageDays} />
          ) : (
            "- -"
          )}
        </Age>
        days
      </Date>
    </StyledCalculatedAge>
  );
}

export default CalculatedAge;
