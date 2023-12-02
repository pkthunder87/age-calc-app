import styled from "styled-components";

function Footer() {
  const StyledFooter = styled.footer`
    font-style: normal;
    font-weight: 400;

    position: absolute;
    bottom: -4rem;
    left: 0;
    right: 0;
    text-align: center;
    color: var(--color-smokey-grey);
    font-size: 1.5rem;

    a {
      color: hsl(228, 45%, 44%);
    }

    @media only screen and (max-width: 25em) {
      text-align: left;
      margin-left: 4rem;
    }
  `;

  return (
    <StyledFooter>
      <p>
        Challenge by &thinsp;
        <a
          href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by &thinsp;
        <a
          href="https://github.com/pkthunder87/age-calc-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          PKThunder87
        </a>
        .
      </p>
    </StyledFooter>
  );
}

export default Footer;
