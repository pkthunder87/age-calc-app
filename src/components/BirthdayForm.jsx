import styled from "styled-components";
import { useForm } from "react-hook-form";

function BirthdayForm() {
  const StyledBirthdayForm = styled.form`
    display: flex;
    height: 50%;
    width: 80%;
    column-gap: 3.2rem;
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
      height: 7.2rem;
      width: 16rem;
      border-radius: 8px;
      border: 1.2px solid var(--color-light-grey);
      padding-left: 2.3rem;

      &::placeholder {
        font-weight: 800;
        font-size: 3.2rem;
        color: hsl(0, 1%, 14%);
      }
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
    /* background-color: red; */
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

      <StyledButton type="submit" form="inputDay" value="Submit">
        Submit
      </StyledButton>
    </BirthdayLayout>
  );
}

export default BirthdayForm;
