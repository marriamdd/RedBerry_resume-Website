import styled from "styled-components";
import BackArrow from "../assets/Group 4.svg";
import { Line } from "../styles/Line";
import downArrow from "../assets/downArrow.svg";
import { useState } from "react";
import { Button } from "../styles/Buttons";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  university: string;
  degree: string;
  finish_date: string;
  description: string;
}

function EducationPage() {
  const [isDegreeModalOpen, setIsDegreeModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log(errors);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <StyledEducation>
      <img src={BackArrow} alt="back-arrow" />
      <EducationFormDiv>
        <EducationHeader>
          <h2>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h2>
          <p>3/3</p>
        </EducationHeader>
        <Line />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <DinamicField>
            <School>
              <p>სასწავლებელი</p>
              <input
                type="text"
                placeholder="სასწავლებელი"
                {...register("university", {
                  required: { value: true, message: "required" },
                })}
              />
              <span>მინიმუმ 2 სიმბოლო</span>
            </School>

            <DegreeAndGraduation>
              <Degree>
                <p>ხარისხი</p>
                <Select>
                  <SelectValue
                    onClick={() => setIsDegreeModalOpen((modal) => !modal)}
                  >
                    <h3>აირჩიეთ ხარისხი</h3>
                    <img src={downArrow} alt="down-arrow" />
                  </SelectValue>

                  {isDegreeModalOpen && (
                    <SelectOptions>
                      <h4>საშუალო სკოლის დიპლომი</h4>
                      <h4>ზოგადსაგანმანათლებლო დიპლომი</h4>
                      <h4>ragaca</h4>
                      <h4>ragaca</h4>
                      <h4>ragaca</h4>
                      <h4>ragaca</h4>
                    </SelectOptions>
                  )}
                </Select>
              </Degree>
              <Graduation>
                <p>დამთავრების რიცხვი</p>
                <input type="date" {...register("finish_date")} />
              </Graduation>
            </DegreeAndGraduation>

            <Description>
              <p>აღწერა</p>
              <textarea
                placeholder="განათლების აღწერა"
                {...register("description")}
              ></textarea>
            </Description>
          </DinamicField>

          <AddSchool>
            <Button padding="1.4rem 2.25rem" bg="#62A1EB">
              სხვა სასწავლებლის დამატება
            </Button>
          </AddSchool>

          <FormButtons>
            <Button>უკან</Button>
            <Button>დასრულება</Button>
          </FormButtons>
        </Form>
      </EducationFormDiv>
    </StyledEducation>
  );
}

const StyledEducation = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 4.5rem 0rem 6.5rem 4.8rem;

  & > img {
    align-self: flex-start;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.1rem;
    color: #000000;
  }

  input {
    width: 100%;
    height: 48px;
    padding: 13px 16px 14px 16px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 4px;
    background: #fff;

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.1rem;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const EducationFormDiv = styled.div`
  width: 100%;
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.93rem;
    color: #1a1a1a;
  }

  & > p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.386rem;
    color: #1a1a1a;
  }
`;

const Form = styled.form``;

const DinamicField = styled.div``;

const School = styled.div`
  & > input {
    margin-top: 0.8rem;
    outline: none;
  }

  & > span {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.1rem;
    margin-top: 0.8rem;
  }
`;

const DegreeAndGraduation = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 5.6rem;
`;

const Degree = styled.div`
  width: 100%;

  & > .select {
    width: 100%;
    height: 48px;
    padding: 13px 16px 14px 16px;
    flex-shrink: 0;
    margin-top: 0.8rem;
  }
`;

const Select = styled.div`
  margin-top: 0.8rem;
  position: relative;
`;

const SelectValue = styled.div`
  width: 100%;
  border: 1px solid #bcbcbc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.8rem;
  padding: 1.3rem 1.6rem 1.4rem 1.6rem;
  border-radius: 4px 0px 0px 0px;
  background: #ffffff;
  cursor: pointer;

  & > h3 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    color: #00000099;
  }
`;

const SelectOptions = styled.div`
  position: absolute;
  width: 100%;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  /* gap: 2rem; */

  & > h4 {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.1rem;
    padding: 1rem 0rem 1rem 1.6rem;

    &:hover {
      background: #4f4f4f;
      transition: all 0.3s ease;
      color: #fff;
      cursor: pointer;
    }
  }
`;

const Graduation = styled.div`
  width: 100%;

  & > input {
    margin-top: 0.8rem;
  }
`;

const Description = styled.div`
  margin-top: 4rem;
  border-bottom: 1px solid #c1c1c1;
  padding-bottom: 5.3rem;

  & > textarea {
    width: 100%;
    padding: 13px 16px 14.5rem 16px;
    border-radius: 4px 0px 0px 0px;
    margin-top: 0.8rem;

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.1rem;
      color: #00000099;
    }
  }
`;

const AddSchool = styled.div`
  margin-top: 4.5rem;
`;

const FormButtons = styled.div`
  margin-top: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default EducationPage;
