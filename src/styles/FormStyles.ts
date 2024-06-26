import styled from "styled-components";
export const Label = styled.label<{ error?: string }>`
  margin-bottom: 1rem;
  font-size: 1.6rem;

  font-weight: 500;
  line-height: 21px;
  color: ${(props) => (props.error ? "red" : "#000")};
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

  input {
    border: ${(props) => (props.error ? "1px solid red" : "#bcbcbc")};
  }
  p {
    color: var(---500, #2e2e2e);
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.1rem;
  }
`;
