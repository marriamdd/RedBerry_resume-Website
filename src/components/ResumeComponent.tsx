import styled from "styled-components";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { Context } from "../App";

function ResumeComponent() {
  const { currentPageNumber } = useContext(Context);

  return (
    <StyledResumeComponent>
      {currentPageNumber > 0 && <About />}
      {currentPageNumber > 1 && <Experience />}

      {currentPageNumber > 2 && <Education />}

      <Logo src={logo} alt="logo" />
    </StyledResumeComponent>
  );
}

const StyledResumeComponent = styled.div`
  padding: 4.8rem 7.5rem 4.4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 108rem;
  h1 {
    color: #f93b1d;
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 4.151rem;
    display: flex;
    gap: 2rem;

    & > span {
      color: #f93b1d;
    }
  }

  h2 {
    color: #f93b1d;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.198rem;
  }

  h3 {
    color: #1a1a1a;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .date {
    color: #909090;
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  p {
    color: #000;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    text-transform: lowercase;
  }
`;

const Logo = styled.img`
  margin-top: auto;
  align-self: flex-start;
`;

export default ResumeComponent;
