import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import { Label, TextInput } from "../styles/FormStyles";
import { Button } from "../styles/Buttons";
import warningIcon from "../assets/ph_warning-fill.svg";
import correctIcon from "../assets/icon-check.svg";
import useGeorgianPatternTextarea from "../customHooks/TexareaGeoPattern";
import useGeorgianPattern from "../customHooks/InputGeoPattern";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IFormInput } from "../App";
import { useContext } from "react";
import { Context } from "../App";

function PersonalPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { personalData, setPersonalData } = useContext(Context);

  const {
    control,
    setValue,
    trigger,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IFormInput>({});

  const navigate = useNavigate();
  const onSubmit = (data: IFormInput) => {
    console.log(data);
    navigate("/experience");
  };

  useEffect(() => {
    const watchFields = watch();
    localStorage.setItem("watchFields", JSON.stringify(watchFields));
  }, [watch]);

  const [avatar, setAvatar] = useState<string | null>(null);
  const fileUploadRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = () => {
    if (fileUploadRef.current) {
      fileUploadRef.current.click();
    }
  };

 const uploadImageDisplay = (event: React.ChangeEvent<HTMLInputElement>) => {
   const file = event.target.files?.[0];
   if (file) {

     const fileList = {
       length: 1,
       item: () => file,
       [Symbol.iterator]: () => ({
         next: () => ({
           value: file,
           done: false,
         }),
       }),
     };

     const cachedURL = URL.createObjectURL(file);
     setAvatar(cachedURL);


     setValue("file", fileList as never, { shouldValidate: true });
     trigger("file");
   }
 };



  const { handleGeorgianInput } = useGeorgianPattern();
  const { handleTextarea } = useGeorgianPatternTextarea();

  const phoneValue = watch("phone");

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^\d+]/g, "");
    e.target.value = sanitizedValue;
  };

  useEffect(() => {
    const storedData = localStorage.getItem("resume");
    if (storedData) {
      const data = JSON.parse(storedData);
      if (data && data.personaldata) {
        reset(data.personaldata);
      }
    }
  }, [reset]);

  useEffect(() => {
    const subscription = watch((value) => {
      const updatedPersonalData = {
        personaldata: {
          name: value.name || "",
          surname: value.surname || "",
          email: value.email || "",
          phone: value.phone || "",
          info: value.info || "",
          file: value.file || null,
        },
      };

      const storedData = localStorage.getItem("resume");
      const existingData = storedData ? JSON.parse(storedData) : {};
      const mergedData = {
        ...existingData,
        ...updatedPersonalData,
      };

      localStorage.setItem("resume", JSON.stringify(mergedData));
      setPersonalData(mergedData.personaldata);
    });

    return () => subscription.unsubscribe();
  }, [watch, setPersonalData]);
  return (
    <MainDiv>
      <Helmet>
        <title>Personal</title>
      </Helmet>
      <div style={{ marginLeft: "11rem" }}>
        <Header style={{ display: "flex" }}>
          <img
            style={{
              alignSelf: "flex-start",
              position: "absolute",
              left: "3.5rem",
            }}
            src="src/assets/personalSvg.svg"
            alt="personalSvg"
          />
          <InfoContainer>
            <h1>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
            <p>1/3</p>
          </InfoContainer>
        </Header>
        <HeaderHr />
        <form className="fieldsDiv" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", gap: "2.4rem" }}>
            <div style={{ position: "relative", width: "100%" }}>
              <TextInput>
                <Label
                  className={errors.name ? "errorLabel" : "label"}
                  htmlFor="name"
                >
                  სახელი
                </Label>

                <input
                  className={
                    watch().name
                      ? "corrected"
                      : errors.name
                      ? "errorInput"
                      : "input"
                  }
                  id="name"
                  onKeyDown={handleGeorgianInput}
                  type="text"
                  {...register("name", {
                    required: "სახელის ველი სავალდებულოა",
                    minLength: {
                      value: 2,
                      message: "მინიმუმ 2 ასო",
                    },
                  })}
                />
                <p>მინიმუმ 2 ასო, ქართული ასო</p>
              </TextInput>

              {watch().name?.length >= 2 && (
                <img
                  style={{
                    position: "absolute",
                    bottom: "4.5rem",
                    right: "1.5rem",
                    width: "2.4rem",
                    height: "2.4rem",
                  }}
                  src={correctIcon}
                  alt="ValidateIcon"
                />
              )}
            </div>
            {errors.name && (
              <img
                src={warningIcon}
                alt={"warningIcon"}
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  marginTop: "5rem",
                }}
              />
            )}
            <div style={{ position: "relative", width: "100%" }}>
              <TextInput>
                <Label
                  className={errors.surname ? "errorLabel" : "label"}
                  htmlFor="surname"
                >
                  გვარი
                </Label>
                <input
                  className={
                    watch().surname
                      ? "corrected"
                      : errors.surname
                      ? "errorInput"
                      : "input"
                  }
                  id="surname"
                  onKeyDown={handleGeorgianInput}
                  type="text"
                  {...register("surname", {
                    required: "გვარის ველი სავალდებულოა",
                    minLength: {
                      value: 2,
                      message: "მინიმუმ 2 ასო",
                    },
                    pattern: {
                      value: /^[\u10A0-\u10FF\u2D00-\u2D2F]+$/,
                      message: "მხოლოდ ქართული ასოები",
                    },
                  })}
                />
                <p>მინიმუმ 2 ასო, ქართული ასო</p>
              </TextInput>
              {watch().surname?.length >= 2 && (
                <img
                  style={{
                    position: "absolute",
                    bottom: "4.5rem",
                    right: "1.5rem",
                    width: "2.4rem",
                    height: "2.4rem",
                  }}
                  src={correctIcon}
                  alt="ValidateIcon"
                />
              )}
            </div>
            {errors.surname && (
              <img
                src={warningIcon}
                alt={"warningIcon"}
                style={{ width: "2.4rem", height: "2.4rem", marginTop: "5rem" }}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              gap: "2.4rem",
              marginTop: "4.6rem",
              marginBottom: "4.6rem",
            }}
          >
            <Controller
              name="file"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileUploadRef}
                    onChange={(e) => {
                      field.onChange(e.target.files);
                      uploadImageDisplay(e);
                    }}
                  />
                  <Label>პირადი ფოტოს ატვირთვა</Label>
                  <button
                    type="button"
                    onClick={handleImageChange}
                    className="upload"
                  >
                    ატვირთვა
                  </button>
                  {avatar && <img src={avatar} alt="Uploaded avatar" />}
                  {errors.file && <img src={warningIcon} alt="warningIcon" />}
                </>
              )}
            />
          </div>

          <div>
            <Label htmlFor="info">ჩემ შესახებ (არასავალდებულო)</Label>
            <textarea
              id="info"
              onKeyDown={handleTextarea}
              className={watch().info ? "correctedInfo" : "info"}
              placeholder="ზოგადი ინფო შენ შესახებ"
              {...register("info", {
                required: false,
                pattern: {
                  value: /^[ა-ჰ]+$/,
                  message: "მხოლოდ ქართული ასოები",
                },
              })}
            ></textarea>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <TextInput style={{ marginTop: "2.5rem", position: "relative" }}>
              <Label
                htmlFor="email"
                className={errors.email ? "errorLabel" : "label"}
              >
                ელ.ფოსტა{" "}
              </Label>
              <input
                className={
                  watch().email !== undefined &&
                  watch().email.includes("@redberry.ge")
                    ? "corrected"
                    : errors.email
                    ? "errorInput"
                    : "input"
                }
                id="email"
                type="email"
                {...register("email", {
                  required: "ელ.ფოსტა სავალდებულოა",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
                    message: "Email must end with @redberry.ge",
                  },
                })}
              />
              <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>

              {watch().email !== undefined &&
                watch().email.includes("@redberry.ge") && (
                  <img
                    style={{
                      position: "absolute",
                      bottom: "4.5rem",
                      right: "1.5rem",
                      width: "2.4rem",
                      height: "2.4rem",
                    }}
                    src={correctIcon}
                    alt="ValidateIcon"
                  />
                )}

              {errors.email ? (
                <img
                  src={warningIcon}
                  alt="warningIcon"
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    position: "absolute",
                    right: "-6%",
                    top: "44%",
                  }}
                />
              ) : null}
            </TextInput>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <TextInput style={{ marginTop: "2.5rem", position: "relative" }}>
              <Label
                htmlFor="phone"
                className={errors.phone ? "errorLabel" : ""}
              >
                მობილურის ნომერი
              </Label>
              <input
                className={
                  phoneValue &&
                  phoneValue.includes("+995") &&
                  phoneValue.length === 13
                    ? "corrected"
                    : errors.phone
                    ? "errorInput"
                    : "input"
                }
                id="phone"
                type="tel"
                placeholder="+995XXXXXXXXX"
                {...register("phone", {
                  required: "მობილურის ნომერი სავალდებულოა",
                  pattern: {
                    value: /^\+995\d{9}$/,
                    message:
                      "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
                  },
                })}
                onInput={handlePhoneInput}
                onKeyDown={(e) => {
                  if (
                    !/[0-9+]/.test(e.key) &&
                    ![
                      "Backspace",
                      "ArrowLeft",
                      "ArrowRight",
                      "Delete",
                    ].includes(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
              />
              <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
              {phoneValue &&
                phoneValue.includes("+995") &&
                phoneValue.length === 13 && (
                  <img
                    style={{
                      position: "absolute",
                      bottom: "4.5rem",
                      right: "1.5rem",
                      width: "2.4rem",
                      height: "2.4rem",
                    }}
                    src={correctIcon}
                    alt="ValidateIcon"
                  />
                )}
              {errors.phone && (
                <img
                  src={warningIcon}
                  alt="warningIcon"
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    position: "absolute",
                    right: "-6%",
                    top: "44%",
                  }}
                />
              )}
            </TextInput>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10.5rem",
            }}
          >
            <Button type="submit">ᲨᲔᲛᲓᲔᲒᲘ</Button>
          </div>
        </form>
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  align-items: center;
  padding: 2rem;

  .errorLabel {
    color: #e52f2f;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.1rem;
  }

  .errorInput {
    display: flex;
    height: 4.8rem;
    padding: 1.3rem 8.3rem 1.4rem 1.6rem;
    align-items: center;
    align-self: stretch;
    border-radius: 0.4rem;
    border: 1px solid #ef5050;
    background: #fff;
    &:focus {
      outline: none;
    }
  }

  .corrected {
    display: flex;
    height: 4.8rem;
    padding: 1.3rem 8.3rem 1.4rem 1.6rem;
    align-items: center;
    align-self: stretch;
    border-radius: 0.4rem;
    border: 1px solid #98e37e;
    background: #fff;
    &:focus {
      outline: none;
    }
  }

  .fieldsDiv {
    margin-top: 7rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }

  .upload {
    display: flex;
    width: 10.7rem;
    height: 2.7rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 0.4rem;
    background: #0e80bf;
    border: none;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    cursor: pointer;
  }

  .info {
    all: unset;
    display: flex;
    padding: 1.3rem 8.3rem 4.6rem 1.6rem;
    flex: 1 0 0;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    border: 1px solid #bcbcbc;
    background: #fff;
    width: 80%;
    margin-top: 0.8rem;
    resize: none;
    min-height: 10rem;
    align-self: stretch;
    font-size: 1.6rem;
  }
  .correctedInfo {
    all: unset;
    display: flex;
    padding: 1.3rem 8.3rem 4.6rem 1.6rem;
    flex: 1 0 0;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    border: 1px solid #98e37e;
    background: #fff;
    width: 85%;
    margin-top: 0.8rem;
    resize: none;
    min-height: 10rem;
    align-self: stretch;
    font-size: 1.6rem;
  }
  .input {
    display: flex;
    height: 4.8rem;
    padding: 1.3rem 1.6rem 1.4rem 1.6rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0.4rem;
    border: 1px solid #bcbcbc;
    background: #fff;
    &:focus {
      outline: none;
    }
  }

  .info::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-family: "Helvetica Neue";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.1rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1a1a1a;

  & > h1 {
    font-weight: 700;
    font-size: 2.4rem;
  }

  & > p {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

const HeaderHr = styled.hr`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export default PersonalPage;
