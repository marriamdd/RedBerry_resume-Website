import styled from "styled-components";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import BackArrow from "../assets/Group 4.svg";
import { Button } from "../styles/Buttons";
import WarningIcon from "../assets/ph_warning-fill.svg";
import { useNavigate } from "react-router-dom";

interface IExperience {
  experience: {
    position: string;
    employer: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

function ExperiencePage() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<IExperience>({
    defaultValues: {
      experience: [
        {
          position: "",
          employer: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    },
  });
  const { fields, append } = useFieldArray<IExperience>({
    control,
    name: "experience",
  });
  const onSubmit: SubmitHandler<IExperience> = (data) => console.log(data);
  console.log(errors);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
      <img
        onClick={() => navigate(-1)}
        style={{
          alignSelf: "flex-start",
          paddingLeft: "4rem",
          marginTop: "4rem",
        }}
        src={BackArrow}
        alt="go back"
      />

      <ExperiencePageStyles>
        <div className="headerOfExperience">
          <h1>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h1>
          <span>2/3</span>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div className="fieldsDiv" style={{ width: "100%" }} key={field.id}>
              <TextInput error={errors.experience?.[index]?.position?.message}>
                <label
                  style={{ paddingTop: "2rem" }}
                  htmlFor={`experience[${index}].position`}
                >
                  თანამდებობა
                </label>
                <div>
                  <input
                    id={`experience[${index}].position`}
                    placeholder="დეველოპერი, დიზაინერი, ა.შ."
                    type="text"
                    {...register(`experience.${index}.position`, {
                      required: true,
                      minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                  />

                  {errors.experience?.[index]?.position && (
                    <img src={WarningIcon} alt="WarningIcon" />
                  )}
                </div>

                <p>მინიმუმ 2 სიმბოლო</p>
              </TextInput>
              <TextInput error={errors.experience?.[index]?.employer?.message}>
                <label htmlFor={`experience[${index}].employer`}>
                  დამსაქმებელი
                </label>
                <div>
                  <input
                    id={`experience[${index}].employer`}
                    placeholder="დამსაქმებელი"
                    type="text"
                    {...register(`experience.${index}.employer`, {
                      required: true,
                      minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                  />
                  {errors.experience?.[index]?.position && (
                    <img src={WarningIcon} alt="WarningIcon" />
                  )}
                </div>

                <p>მინიმუმ 2 სიმბოლო</p>
              </TextInput>
              <DateForm>
                <div>
                  <label htmlFor={`experience[${index}].startDate`}>
                    დაწყების რიცხვი
                  </label>
                  <input
                    id={`experience[${index}].startDate`}
                    type="date"
                    {...register(`experience.${index}.startDate`)}
                  />
                </div>
                <div>
                  <label htmlFor={`experience[${index}].endDate`}>
                    დაწყების რიცხვი
                  </label>
                  <input
                    id={`experience[${index}].endDate`}
                    type="date"
                    {...register(`experience.${index}.endDate`)}
                  />
                </div>
              </DateForm>
              <TextInput
                error={errors.experience?.[index]?.description?.message}
                style={{
                  paddingBottom: "5rem",
                  borderBottom: "1px solid #C1C1C1",
                }}
              >
                <label htmlFor={`experience[${index}].description`}>
                  აღწერა
                </label>
                <textarea
                  id={`experience[${index}].description`}
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  {...register(`experience.${index}.description`)}
                ></textarea>
              </TextInput>
            </div>
          ))}
          <Button
            type="button"
            style={{ alignSelf: "flex-start" }}
            bg={"#62A1EB"}
            padding={"1.8rem 5.5rem"}
            onClick={() =>
              append({
                position: "",
                employer: "",
                startDate: "",
                endDate: "",
                description: "",
              })
            }
          >
            მეტი გამოცდილების დამატება
          </Button>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "11.5rem",
            }}
          >
            <Button onClick={() => navigate(-1)} type="button">
              უკან
            </Button>
            <Button type="submit">შემდეგი</Button>
          </div>
        </Form>
      </ExperiencePageStyles>
    </div>
  );
}

export default ExperiencePage;
// const DateForm = styled.div`
//   display: flex;

//   justify-content: space-between;
//   width: 100%;
//   gap: 3.2rem;
//   div {
//     display: flex;
//     flex-direction: column;
//     flex: 1;
//   }
// `;
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 4rem;
//   .fieldsDiv {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//   }
// `;
// const TextInput = styled.div<{ error?: string }>`
//   width: 100%;
//   display: flex;
//   flex-direction: column;

//   gap: 1rem;
//   div {
//     display: flex;
//     gap: 0.5rem;
//   }
//   label {
//     color: ${(props) => (props.error ? "red" : "#000")};
//   }
//   input {
//     border: ${(props) => (props.error ? "1px solid red" : "#bcbcbc")};
//   }
//   p {
//     color: var(---500, #2e2e2e);
//     font-size: 14px;
//     font-weight: 300;
//     line-height: 21px;
//   }
// `;
// const ExperiencePageStyles = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;

//   justify-content: center;
//   input {
//     width: 100%;
//     height: 48px;
//     padding: 13px 16px 14px 16px;
//     justify-content: center;
//     align-items: center;
//     flex-shrink: 0;
//     align-self: stretch;
//     border-radius: 4px;
//     background: #fff;
//   }
//   textarea {
//     padding: 13px 16px 89px 16px;
//     justify-content: center;
//     align-items: center;

//     align-self: stretch;
//     border-radius: 4px;
//     border: 1px solid #bcbcbc;
//     background: #fff;

//     font-size: 16px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 21px;
//   }
//   label {
//     margin-bottom: 1rem;
//     font-size: 1.6rem;

//     font-weight: 500;
//     line-height: 21px;
//   }
//   .headerOfExperience {
//     display: flex;
//     align-items: center;
//     padding-top: 4rem;
//     padding-bottom: 5rem;
//     span {
//       margin-left: auto;
//       margin-left: -2.8rem;

//       text-align: right;
//       font-size: 2rem;
//       font-weight: 400;
//     }
//     h1 {
//       padding-bottom: 1rem;
//       border-bottom: 1px solid black;
//       width: 100%;
//       font-size: 2.4rem;
//       font-weight: 700;
//     }
//   }
// `;
