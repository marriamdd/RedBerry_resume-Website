import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { Label, TextInput } from "../styles/FormStyles";
import { Button } from "../styles/Buttons";

interface IFormInput {
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  data: string;
}

function PersonalPage() {
  const MainDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem;

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
      padding: 1.3rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.4rem;
      border: 1px solid #bcbcbc;
      background: #fff;
      width: 100%;
      margin-top: 0.8rem;
      resize: none;
      min-height: 10rem;
    }
    input {
      display: flex;
      height: 48px;
      padding: 13px 16px 14px 16px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      align-self: stretch;
      border-radius: 4px;
      border: 1px solid #bcbcbc;
      background: #fff;
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

  const {
    register,
    handleSubmit,
    // formState: { errors },
    watch,
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  useEffect(() => {
    const watchFields = watch();
    localStorage.setItem("watchFields", JSON.stringify(watchFields));
  }, [watch()]);

  const [avatar, setAvatar] = useState<string | null>(null);
  const fileUploadRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = () => {
    if (fileUploadRef.current) {
      fileUploadRef.current.click();
    }
  };

  const uploadImageDisplay = () => {
    const uploadFile = fileUploadRef.current?.files?.[0];
    if (uploadFile) {
      const cachedURL = URL.createObjectURL(uploadFile);
      setAvatar(cachedURL);
    }
  };

  return (
    <MainDiv>
      <img
        style={{ alignSelf: "flex-start", marginRight: "6rem" }}
        src="src/assets/personalSvg.svg"
        alt=""
      />
      <div>
        <Header>
          <InfoContainer>
            <h1>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
            <p>1/3</p>
          </InfoContainer>
        </Header>
        <HeaderHr />
        <form className="fieldsDiv" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", gap: "2.4rem" }}>
            <TextInput>
              <Label className="label" htmlFor="name">
                სახელი
              </Label>
              <input
                className="input"
                id="name"
                type="text"
                {...register("name", {
                  required: "სახელის ველი სავალდებულოა",
                  minLength: {
                    value: 2,
                    message: "მინიმუმ 2 ასო",
                  },
                  pattern: {
                    value: /^[ა-ჰ]+$/,
                    message: "მხოლოდ ქართული ასოები",
                  },
                })}
              />
              <p>მინიმუმ 2 ასო, ქართული ასო</p>
            </TextInput>

            <TextInput>
              <Label className="label" htmlFor="surname">
                გვარი
              </Label>
              <input
                className="input"
                id="surname"
                type="text"
                {...register("surname", {
                  required: "გვარის ველი სავალდებულოა",
                  minLength: {
                    value: 2,
                    message: "მინიმუმ 2 ასო",
                  },
                  pattern: {
                    value: /^[ა-ჰ]+$/,
                    message: "მხოლოდ ქართული ასოები",
                  },
                })}
              />
              <p>მინიმუმ 2 ასო, ქართული ასო</p>
            </TextInput>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2.4rem",
              marginTop: "4.6rem",
              marginBottom: "4.6rem",
            }}
          >
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              ref={fileUploadRef}
              onChange={uploadImageDisplay}
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
          </div>
          <div>
            <Label htmlFor="info">ჩემ შესახებ (არასავალდებულო)</Label>
            <textarea
              className="info"
              name="info"
              id="info"
              placeholder="ზოგადი ინფო შენ შესახებ"
            ></textarea>
          </div>
          <TextInput style={{ marginTop: "2.5rem" }}>
            <Label htmlFor="email">ელ.ფოსტა </Label>
            <input
              className="input"
              id="email"
              type="email"
              {...register("email", {
                required: "ელ.ფოსტა სავალდებულოა",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "გთხოვთ, მიუთითოთ სწორი ელ.ფოსტა",
                },
              })}
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </TextInput>
          <TextInput style={{ marginTop: "2.5rem" }}>
            <Label htmlFor="phone">მობილურის ნომერი</Label>
            <input
              className="input"
              id="phone"
              type="text"
              {...register("phone", {
                required: "მობილურის ნომერი სავალდებულოა",
                pattern: {
                  value: /^\+995\d{9}$/,
                  message:
                    "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
                },
              })}
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
          </TextInput>
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

export default PersonalPage;
