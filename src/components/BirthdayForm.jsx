import styled from "styled-components";
import { useForm } from "react-hook-form";

function BirthdayForm() {
  const StyledBirthdayForm = styled.form`
    display: flex;

    background-color: red;
    @media only screen and (max-width: 25em) {
      background-color: lightblue;
    }
  `;

  const StyledInput = styled.div`
    display: flex;

    background-color: green;
  `;

  function onSubmit(data) {
    console.log(data.day, data.month, data.year);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const StyledButton = styled.button`
    height: 4rem;
    width: 8rem;
  `;

  const BirthdayLayout = styled.div`
    display: flex;
  `;

  return (
    <div>
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
    </div>
  );
}

export default BirthdayForm;
