import styled from "styled-components";
import { useForm } from "react-hook-form";

function BirthdayForm() {
  const StyledBirthdayForm = styled.form`
    display: flex;
    height: 50%;
    width: 80%;
    column-gap: 2rem;
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

    label {
      margin-top: -0.2rem;
      font-size: 1.3rem;
      font-style: normal;
      letter-spacing: 0.33em;
      font-weight: 700;
      color: var(--color-smokey-grey);
      text-transform: uppercase;
    }

    input {
      height: 3rem;
      width: 6rem;
    }
  `;

  function onSubmit(data) {
    console.log(data.day, data.month, data.year);
  }

  const { register, handleSubmit } = useForm();

  const StyledButton = styled.button`
    height: 4rem;
    width: 8rem;
  `;

  const BirthdayLayout = styled.div`
    background-color: red;
  `;

  return (
    <BirthdayLayout>
      <StyledBirthdayForm id="inputDay" onSubmit={handleSubmit(onSubmit)}>
        <StyledInput>
          <label htmlFor="day">Day</label>
          <input type="number" id="day" placeholder="DD" {...register("day")} />
        </StyledInput>

        <StyledInput>
          <label htmlFor="month">Month</label>
          <input
            type="number"
            id="month"
            placeholder="DD"
            {...register("month")}
          />
        </StyledInput>

        <StyledInput>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            placeholder="DD"
            {...register("year")}
          />
        </StyledInput>
      </StyledBirthdayForm>

      <StyledButton type="submit" form="inputDay" value="Submit">
        Submit
      </StyledButton>
    </BirthdayLayout>
  );
}

export default BirthdayForm;
