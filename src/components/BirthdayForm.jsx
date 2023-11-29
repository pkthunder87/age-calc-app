import styled from "styled-components";
import { useForm } from "react-hook-form";
import { isLeapYear, format } from "date-fns";

const daysInMonth = [0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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

    height: 7.2rem;
    width: 16rem;

    border-radius: 8px;
    border: 1.2px solid var(--color-light-grey);
    padding-left: 2.3rem;

    font-weight: 800;
    font-size: 3.2rem;

    cursor: pointer;
    caret-color: var(--color-purple);

    &::placeholder {
    }

    &:focus-visible {
      outline: 1px solid var(--color-purple);
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

  &:hover {
    background-color: var(--color-off-black);
  }
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

const InvalidText = styled.p`
  color: var(--color-light-red);
  font-weight: 400;
  font-style: italic;
  font-size: 1.3rem;
`;

function BirthdayForm({ setAgeDays, setAgeMonths, setAgeYears }) {
  function onSubmit(data) {
    console.log(data.day, data.month, data.year);
    console.log(errors);
    setAgeDays(+data.day);
    setAgeMonths(+data.month);
    setAgeYears(+data.year);
  }

  function onError(errors) {
    console.log(errors);
  }

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  // const date = new Date(2020, 2);
  // console.log(date);
  // // const year = format(date, "MM/dd/yyyy");
  // const isLeap = isLeapYear(date);

  // // console.log(year);
  // console.log(isLeap);

  return (
    <BirthdayLayout>
      <StyledBirthdayForm
        id="inputDay"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <StyledInput>
          <label htmlFor="day">Day</label>
          <input
            type="text"
            id="day"
            placeholder="DD"
            {...register("day", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Must be a valid day",
              },
              validate: (value) => {
                const isLeap = new Date(getValues().year, 2);

                // Checks if input month is a leap year
                if (+getValues().month === 2)
                  return (
                    value <= (isLeapYear(isLeap) ? 29 : 28) ||
                    "Must be a valid day"
                  );
                else
                  return (
                    value <= daysInMonth[+getValues().month] ||
                    "Must be a valid day"
                  );
              },
            })}
          />
          {errors.day?.message && (
            <InvalidText>{errors.day.message}</InvalidText>
          )}
        </StyledInput>

        <StyledInput>
          <label htmlFor="month">Month</label>
          <input
            type="text"
            id="month"
            placeholder="MM"
            {...register("month", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Must be a valid month",
              },
              max: {
                value: 12,
                message: "Must be a valid month",
              },
            })}
          />
          {errors.month?.message && (
            <InvalidText>{errors.month.message}</InvalidText>
          )}
        </StyledInput>

        <StyledInput>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            placeholder="YYYY"
            {...register("year", {
              required: "This field is required",
              min: {
                value: 1900,
                message: "Must be a valid year",
              },
              validate: (value) => {
                const currentDate = new Date();
                const currentYear = format(currentDate, "yyyy");

                return value <= +currentYear || "Must be in the past";
              },
            })}
          />
          {errors.year?.message && (
            <InvalidText>{errors.year.message}</InvalidText>
          )}
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
