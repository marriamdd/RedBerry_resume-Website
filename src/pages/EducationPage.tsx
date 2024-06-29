import styled from "styled-components";
import BackArrow from "../assets/Group 4.svg";
import { Line } from "../styles/Line";
import { Button } from "../styles/Buttons";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import Degree from "../components/Degree";
import School from "../components/School";
import Graduation from "../components/Graduation";
import Description from "../components/Description";

export interface FormData {
  education: {
    university: string;
    finish_date: string;
    degree: string;
    description: string;
  }[];
}

function EducationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      education: [
        {
          university: "",
          finish_date: "",
          degree: "",
          description: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray<FormData>({
    control,
    name: "education",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <StyledEducation>
      <Helmet>
        <title>Education</title>
      </Helmet>
      <img src={BackArrow} alt="back-arrow" />
      <EducationFormDiv>
        <EducationHeader>
          <h2>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h2>
          <p>3/3</p>
        </EducationHeader>
        <Line />

        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <DinamicField key={field.id}>
                <School
                  index={index}
                  error={errors.education?.[index]?.university?.message}
                  register={register}
                  watch={watch}
                />

                <DegreeAndGraduation>
                  <Degree
                    register={register}
                    setValue={setValue}
                    index={index}
                    error={errors.education?.[index]?.degree?.message}
                  />
                  <Graduation
                    register={register}
                    index={index}
                    error={errors.education?.[index]?.finish_date?.message}
                  />
                </DegreeAndGraduation>

                <Description
                  register={register}
                  index={index}
                  error={errors.education?.[index]?.description?.message}
                />
              </DinamicField>
            );
          })}

          <AddSchool>
            <Button
              padding="1.4rem 2.25rem"
              bg="#62A1EB"
              onClick={() => {
                append({
                  university: "",
                  finish_date: "",
                  description: "",
                  degree: "",
                });
              }}
              type="button"
            >
              სხვა სასწავლებლის დამატება
            </Button>
          </AddSchool>

          <FormButtons>
            <Button type="button">უკან</Button>
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
  }

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

const DegreeAndGraduation = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 5.6rem;
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
