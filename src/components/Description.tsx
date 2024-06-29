import styled from "styled-components";
import warning from "../assets/ph_warning-fill.svg";
import useGeorgianPatternTextarea from "../customHooks/TexareaGeoPattern";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../pages/EducationPage";

interface DescriptionProps {
  register: UseFormRegister<FormData>;
  index: number;
  error?: string;
}

export default function Description({
  register,
  error,
  index,
}: DescriptionProps) {
  const { handleTextarea, geoErrorMessageTextarea } =
    useGeorgianPatternTextarea();
  return (
    <DescriptionDiv>
      <StyledDescription error={error}>
        <p>აღწერა</p>
        <textarea
          onKeyDown={handleTextarea}
          placeholder="განათლების აღწერა"
          id={`education[${index}].description`}
          {...register(`education.${index}.description`, {
            required: { value: true, message: "required" },
          })}
        ></textarea>

        {geoErrorMessageTextarea[`education[${index}].description`] && (
          <p style={{ color: "red" }}>
            {geoErrorMessageTextarea[`education[${index}].description`]}
            &nbsp;
          </p>
        )}
      </StyledDescription>
      {error && <ErrorImg src={warning} alt="warning" />}
    </DescriptionDiv>
  );
}

const DescriptionDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

const StyledDescription = styled.div<{ error?: string }>`
  width: 100%;
  margin-top: 4rem;
  border-bottom: 1px solid #c1c1c1;
  padding-bottom: 5.3rem;

  & > textarea {
    width: 100%;
    padding: 13px 16px 14.5rem 16px;
    border-radius: 4px 0px 0px 0px;
    margin-top: 0.8rem;
    border: ${(props) => (props.error ? "1px solid #EF5050" : "#BCBCBC")};

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.1rem;
      color: #00000099;
    }
  }

  & > p {
    color: ${(props) => (props.error ? "#E52F2F" : "#000000")};
  }
`;

const ErrorImg = styled.img`
  margin-right: -5rem;
`;
