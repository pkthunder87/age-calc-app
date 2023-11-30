import styled from "styled-components";
import { useForm } from "react-hook-form";
import { differenceInDays, format, isLeapYear } from "date-fns";
import { useState } from "react";

////////////////////////////////
// Variables
const daysInMonth = [0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//////////////////////////////
// Styled components
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

const StyledInputErrors = styled.div`
  display: flex;
  flex-direction: column;

  font-style: normal;
  color: var(--color-light-red);

  label {
    margin-top: -0.2rem;

    font-size: 1.3rem;
    letter-spacing: 0.33em;
    font-weight: 700;
    text-transform: uppercase;
  }

  input {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;

    height: 7.2rem;
    width: 16rem;

    border-radius: 8px;
    border: 1.2px solid var(--color-light-grey);
    padding-left: 2.3rem;

    font-weight: 800;
    font-size: 3.2rem;

    cursor: pointer;
    caret-color: var(--color-light-red);

    &::placeholder {
    }

    outline: 1px solid var(--color-light-red);
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

/////////////////////////////
// React Component
function BirthdayForm({ setAgeDays, setAgeMonths, setAgeYears }) {
  function onSubmit(data) {
    console.log(data.day, data.month, data.year);
    console.log(errors);

    setDayHasErrors(false);
    setMonthHasErrors(false);
    setYearHasErrors(false);

    const currentDate = new Date();
    console.log(currentDate);
    const birthdayInput = new Date(+data.year, +data.month - 1, +data.day);
    console.log(birthdayInput);

    setAgeDays(+data.day);
    setAgeMonths(+data.month);
    setAgeYears(+data.year);
  }

  const [dayHasErrors, setDayHasErrors] = useState(false);
  const [monthHasErrors, setMonthHasErrors] = useState(false);
  const [yearHasErrors, setYearHasErrors] = useState(false);

  function onError(errors) {
    console.log(errors);
    if (errors.day) setDayHasErrors(true);
    else setDayHasErrors(false);
    if (errors.month) setMonthHasErrors(true);
    else setMonthHasErrors(false);
    if (errors.year) setYearHasErrors(true);
    else setYearHasErrors(false);
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  //////////////////////////
  // Error dependent JSX
  const dayInputForm = (
    <>
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
                value <= (isLeapYear(isLeap) ? 29 : 28) || "Must be a valid day"
              );
            else
              return (
                value <= daysInMonth[+getValues().month] ||
                "Must be a valid day"
              );
          },
        })}
      />
      {errors.day?.message && <InvalidText>{errors.day.message}</InvalidText>}
    </>
  );

  const monthInputForm = (
    <>
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
    </>
  );

  const yearInputForm = (
    <>
      {" "}
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
      {errors.year?.message && <InvalidText>{errors.year.message}</InvalidText>}
    </>
  );

  //////////////////////////////
  // What is visually rendered
  return (
    <BirthdayLayout>
      <StyledBirthdayForm
        id="inputDay"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {dayHasErrors ? (
          <StyledInputErrors>{dayInputForm}</StyledInputErrors>
        ) : (
          <StyledInput>{dayInputForm}</StyledInput>
        )}

        {monthHasErrors ? (
          <StyledInputErrors>{monthInputForm}</StyledInputErrors>
        ) : (
          <StyledInput>{monthInputForm}</StyledInput>
        )}

        {yearHasErrors ? (
          <StyledInputErrors>{yearInputForm}</StyledInputErrors>
        ) : (
          <StyledInput>{yearInputForm}</StyledInput>
        )}
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
