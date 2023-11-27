import styled from "styled-components";
import { useForm } from "react-hook-form";

function BirthdayForm() {
  function onSubmit(data) {
    console.log(data.day, data.month, data.year);
  }

  const { register, handleSubmit } = useForm();

  const StyledBirthdayForm = styled.form`
    display: flex;
    column-gap: 3.2rem;

    height: 50%;
    width: 80%;

    margin-top: 4rem;
    margin-left: 3.6rem;

    background-color: white;
    @media only screen and (max-width: 25em) {
      background-color: lightblue;
    }
  `;

  const StyledInput = styled.div`
    display: flex;
    flex-direction: column;

    font-style: normal;
    color: var(--color-smokey-grey);

    label {
      margin-top: -0.2rem;

      font-size: 1.3rem;
      letter-spacing: 0.33em;
      font-weight: 700;
      text-transform: uppercase;
    }

    input {
      margin-top: 0.8rem;
      display: flex;

      height: 7.2rem;
      width: 16rem;

      border-radius: 8px;
      border: 1.2px solid var(--color-light-grey);
      padding-left: 2.3rem;
      padding-top: 1.5rem;

      &::placeholder {
        font-weight: 800;
        font-size: 3.2rem;
      }
    }
  `;

  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 9.6rem;
    width: 9.6rem;

    cursor: pointer;
    border: none;
    border-radius: 50%;
    background-color: var(--color-purple);

    position: absolute;
    right: 3.6rem;
    bottom: 1.2rem;
    z-index: 2;
  `;

  const BirthdayLayout = styled.div`
    position: relative;
  `;

  const SolidLine = styled.div`
    margin-top: 2.2rem;
    margin-left: 3.6rem;
    width: 80%;

    border: 1px solid var(--color-off-white);
  `;

  return (
    <BirthdayLayout>
      <StyledBirthdayForm id="inputDay" onSubmit={handleSubmit(onSubmit)}>
        <StyledInput>
          <label htmlFor="day">Day</label>
          <input type="text" id="day" placeholder="DD" {...register("day")} />
        </StyledInput>

        <StyledInput>
          <label htmlFor="month">Month</label>
          <input
            type="text"
            id="month"
            placeholder="MM"
            {...register("month")}
          />
        </StyledInput>

        <StyledInput>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            placeholder="YYYY"
            {...register("year")}
          />
        </StyledInput>
      </StyledBirthdayForm>

      <SolidLine></SolidLine>
      <StyledButton type="submit" form="inputDay" value="Submit">
        <img
          className=" "
          src="./icon-arrow.svg"
          alt="arrow pointing downwards"
        />
      </StyledButton>
    </BirthdayLayout>
  );
}

export default BirthdayForm;
