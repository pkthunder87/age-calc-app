import styled from "styled-components";
import { useForm } from "react-hook-form";

function BirthdayForm() {
  const StyledBirthdayForm = styled.div`
    @media only screen and (max-width: 25em) {
      background-color: lightblue;
    }
  `;

  function onSubmit(data) {
    console.log(data.day, data.month, data.year);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledBirthdayForm>
      <form id="inputDay" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="day">Day</label>
          <input type="number" id="day" placeholder="DD" {...register("day")} />
        </div>

        <div>
          <label htmlFor="month">Month</label>
          <input
            type="number"
            id="month"
            placeholder="DD"
            {...register("month")}
          />
        </div>

        <div>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            placeholder="DD"
            {...register("year")}
          />
        </div>
      </form>

      <button type="submit" form="inputDay" value="Submit">
        Submit
      </button>
    </StyledBirthdayForm>
  );
}

export default BirthdayForm;
