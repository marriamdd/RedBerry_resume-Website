import useGeorgianPattern from "../customHooks/InputGeoPattern";
import check from "../assets/akar-icons_circle-check-fill.svg";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormData } from "../pages/EducationPage";
import styled from "styled-components";
import warning from "../assets/ph_warning-fill.svg";

interface SchoolProps {
  register: UseFormRegister<FormData>;
  index: number;
  error?: string;
  watch: UseFormWatch<FormData>;
}

export default function School({ register, index, error, watch }: SchoolProps) {
  const { handleGeorgianInput, geoErrorMessage } = useGeorgianPattern();

  return (
    <SchoolDiv>
      <StyledSchool error={error}>
        <p>სასწავლებელი</p>
        <input
          type="text"
          placeholder="სასწავლებელი"
          id={`education[${index}].university`}
          onKeyDown={(e) => handleGeorgianInput(e)}
          {...register(`education.${index}.university`, {
            required: { value: true, message: "required" },
            minLength: {
              value: 2,
              message: "The length must be at least 2",
            },
          })}
        />
        <span>
          მინიმუმ 2 &nbsp;
          {geoErrorMessage[`education[${index}].university`] && (
            <span style={{ color: "red" }}>
              {geoErrorMessage[`education[${index}].university`]}
              &nbsp;
            </span>
          )}
          სიმბოლო
        </span>
      </StyledSchool>
      {error && <ErrorImg src={warning} alt="warning" />}
      {watch().education[index].university.length >= 2 && (
        <SucessImg src={check} />
      )}
    </SchoolDiv>
  );
}

const SchoolDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

const StyledSchool = styled.div<{ error?: string }>`
  width: 100%;

  & > input {
    width: 100%;
    height: 48px;
    padding: 13px 16px 14px 16px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #bcbcbc;
    outline: 1px solid #bcbcbc;
    margin-top: 0.8rem;

    border: ${(props) => (props.error ? "1px solid #EF5050" : "#BCBCBC")};

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.1rem;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  & > span {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.1rem;
    margin-top: 0.8rem;
  }

  & > p {
    color: ${(props) => (props.error ? "#E52F2F" : "#000000")};
  }
`;

const SucessImg = styled.img`
  position: absolute;
  right: 1.4rem;
  top: 4.3rem;
`;

const ErrorImg = styled.img`
  margin-right: -5rem;
`;
