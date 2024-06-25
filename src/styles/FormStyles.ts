import styled from "styled-components";
export const DateForm = styled.div`
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  .fieldsDiv {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
export const TextInput = styled.div<{ error?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  div {
    display: flex;
    gap: 0.5rem;
  }
  label {
    color: ${(props) => (props.error ? "red" : "#000")};
  }
  input {
    border: ${(props) => (props.error ? "1px solid red" : "#bcbcbc")};
  }
  p {
    color: var(---500, #2e2e2e);
    font-size: 14px;
    font-weight: 300;
    line-height: 21px;
  }
`;
export const ExperiencePageStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
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
    margin-bottom: 1rem;
    font-size: 1.6rem;

    font-weight: 500;
    line-height: 21px;
  }
  .headerOfExperience {
    display: flex;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 5rem;
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
