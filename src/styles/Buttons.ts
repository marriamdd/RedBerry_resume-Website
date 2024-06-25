import styled from "styled-components";
export const Button = styled.button<{ padding?: string; bg?: string }>`
  border-radius: 0.4rem;
  background: ${(props) => (props.bg ? props.bg : "#6B40E3")};
  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  border: none;
  padding: ${(props) => (props.padding ? props.padding : "1.4rem 3.5rem")};
  cursor: pointer;
`;
