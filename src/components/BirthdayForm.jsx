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
    width: 90%;
    margin-left: 3.2rem;
    justify-content: center;
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

    @media only screen and (max-width: 25em) {
      margin-top: 2.5rem;
      font-size: 2.2rem;
      letter-spacing: 0.2em;
    }
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

    @media only screen and (max-width: 25em) {
      height: 9.2rem;
      width: 16rem;
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

    @media only screen and (max-width: 25em) {
      margin-top: 2.5rem;
      font-size: 2.2rem;
      letter-spacing: 0.2em;
    }
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

    @media only screen and (max-width: 25em) {
      height: 9.2rem;
      width: 16rem;
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

  @media only screen and (max-width: 25em) {
    height: 11.5rem;
    width: 11.5rem;

    right: 41%;
    bottom: 5.5rem;

    svg {
      transform: scale(0.5);
      g {
        stroke-width: 4;
      }
    }
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

  @media only screen and (max-width: 25em) {
    margin-top: 6rem;
    width: 88%;
  }
`;

const InvalidText = styled.p`
  color: var(--color-light-red);
  font-weight: 400;
  font-style: italic;
  font-size: 1.3rem;

  @media only screen and (max-width: 25em) {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
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
    const userBirthday = new Date(+data.year, +data.month - 1, +data.day);
    const daysDifference = +differenceInDays(currentDate, userBirthday);

    const userAgeInYears = Math.floor(daysDifference / 365);

    // Subtract leap year days
    const userAgeInMonths = Math.floor(
      ((daysDifference % 365) - Math.floor(userAgeInYears / 4)) / 30.42
    );

    const userAgeInDays = Math.floor(
      ((daysDifference % 365) - Math.floor(userAgeInYears / 4)) % 30.42
    );

    setAgeYears(userAgeInYears);
    setAgeMonths(userAgeInMonths);
    setAgeDays(userAgeInDays);
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="44"
          viewBox="0 0 46 44"
        >
          <g fill="none" stroke="#FFF" strokeWidth="2">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </StyledButton>
    </BirthdayLayout>
  );
}

export default BirthdayForm;
