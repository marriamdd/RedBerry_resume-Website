import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { Label, TextInput } from "../styles/FormStyles";
import { Button } from "../styles/Buttons";
function PersonalPage() {
  const MainDiv = styled.div`
    display: flex;
    align-items: center;
    .fieldsDiv {
      margin-top: 7rem;
      width: 100%;
      flex-direction: column;
      justify-content: center;
    }
    .info::placeholder {
      color: rgba(0, 0, 0, 0.6);
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.1rem;
    }
    .upload {
      display: flex;
      width: 10.7rem;
      height: 2.7rem;
      padding: 1rem 1rem 1.2rem 1rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      border-radius: 0.4rem;
      background: #0e80bf;
      border: none;
      color: #fff;
      font-size: 1.4rem;
      font-weight: 400;
    }

    .info {
      all: unset;
      display: flex;
      padding: 1.3rem 1.6rem 6.9rem 1.6rem;
      justify-content: center;
      align-items: center;
      flex: 1 0 0;
      align-self: stretch;
      border-radius: 0.4rem;
      border: 1px solid #bcbcbc;
      background: #fff;
      width: 100%;
      margin-top: 0.8rem;
    }
    .input {
      display: flex;
      height: 4.8rem;
      padding: 1.3rem 1.6rem 1.4rem 1.6rem;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      border-radius: 0.4rem;
      border: 1px solid #bcbcbc;
      background: #fff;
    }
  `;

  const Header = styled.header`
    display: flex;
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
  `;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const watchFields = watch();
    localStorage.setItem("watchFields", JSON.stringify(watchFields));
  }, [watch()]);

  const [avatar, setAvatar] = useState();

  const fileUploadRef = useRef();
  const handleImageChange = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = () => {
    const uploadFile = fileUploadRef.current.files[0];

    const cachedURL = URL.createObjectURL(uploadFile);
    setAvatar(cachedURL);
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
              <Label className="label" htmlFor="username">
                სახელი
              </Label>
              <input
                className="input"
                id="username"
                type="text"
                {...register("username", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "მინიმუმ 2 ასო, ქართული ასოები",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "მინიმუმ 2 ასო, ქართული ასოები",
                  },
                })}
              />
              <p>მინიმუმ 2 ასო, ქართული ასოები</p>
            </TextInput>

            <TextInput>
              <Label className="label" htmlFor="surname">
                გვარი
              </Label>
              <input
                className="input"
                id="surname"
                type="text"
                {...register("text", {
                  required: "მინიმუმ 2 ასო, ქართული ასოები",
                  minLength: {
                    value: 2,
                    message: "მინიმუმ 2 ასო, ქართული ასოები",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "მინიმუმ 2 ასო, ქართული ასოები",
                  },
                })}
              />
              <p>მინიმუმ 2 ასო, ქართული ასოები</p>
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
              type="text"
              {...register("text", {
                required: "მინიმუმ 2 ასო, ქართული ასოები",
                minLength: {
                  value: 2,
                  message: "მინიმუმ 2 ასო, ქართული ასოები",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "მინიმუმ 2 ასო, ქართული ასოები",
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
              {...register("text", {
                required: "მინიმუმ 2 ასო, ქართული ასოები",
                minLength: {
                  value: 2,
                  message: "მინიმუმ 2 ასო, ქართული ასოები",
                },
                pattern: {},
              })}
            ></input>
            <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
          </TextInput>
          <div style={{ display: "flex",  justifyContent: "flex-end", marginTop: "10.5rem"}}>
            <Button type="button">ᲨᲔᲛᲓᲔᲒᲘ</Button>
          </div>
        </form>
      </div>
    </MainDiv>
  );
}

export default PersonalPage;
