import styled from "styled-components";
export const Button = styled.button<{ padding: string; bg: string }>`
  border-radius: 0.4rem;
  background: ${(props) => props.bg};
  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  border: none;
  padding: ${(props) => props.padding};
`;
