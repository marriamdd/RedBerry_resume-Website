import styled from "styled-components";

import BackArrow from "../assets/Group 4.svg";
import { Button } from "../styles/Buttons";
function ExperiencePage() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
      <img
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
        <Form>
          <TextInput>
            <label htmlFor="position">თანამდებობა</label>
            <input
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              type="text"
              id="position"
            />
            <p>მინიმუმ 2 სიმბოლო</p>
          </TextInput>
          <TextInput>
            <label htmlFor="employer">დამსაქმებელი</label>
            <input placeholder="დამსაქმებელი" type="text" id="employer" />
            <p>მინიმუმ 2 სიმბოლო</p>
          </TextInput>
          <DateForm>
            <div>
              <label htmlFor="startDate">დაწყების რიცხვი</label>
              <input id="startDate" type="date" />
            </div>
            <div>
              <label htmlFor="endDate">დაწყების რიცხვი</label>
              <input id="endDate" type="date" />
            </div>
          </DateForm>
          <TextInput
            style={{
              paddingBottom: "5rem",
              borderBottom: "1px solid #C1C1C1",
            }}
          >
            <label htmlFor="textarea">აღწერა</label>
            <textarea
              id="textarea"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            ></textarea>
          </TextInput>
          <Button
            style={{ alignSelf: "flex-start" }}
            bg={"#62A1EB"}
            padding={"1.8rem 5.5rem"}
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
            <Button>უკან</Button>
            <Button>შემდეგი</Button>
          </div>
        </Form>
      </ExperiencePageStyles>
    </div>
  );
}

export default ExperiencePage;
const DateForm = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
  gap: 3.2rem;
  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
const TextInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1rem;

  p {
    color: var(---500, #2e2e2e);
    font-size: 14px;
    font-weight: 300;
    line-height: 21px;
  }
`;
const ExperiencePageStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  input {
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
  textarea {
    padding: 13px 16px 89px 16px;
    justify-content: center;
    align-items: center;

    align-self: stretch;
    border-radius: 4px;
    border: 1px solid #bcbcbc;
    background: #fff;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
  label {
    color: #000;
    margin-bottom: 1rem;
    font-size: 1.6rem;

    font-weight: 500;
    line-height: 21px;
  }
  .headerOfExperience {
    display: flex;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 8rem;
    span {
      margin-left: auto;
      margin-left: -2.8rem;

      text-align: right;
      font-size: 2rem;
      font-weight: 400;
    }
    h1 {
      padding-bottom: 1rem;
      border-bottom: 1px solid black;
      width: 100%;
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;
