import styled from "styled-components";
import About from "./About";

function ResumeComponent() {
  return (
    <StyledResumeComponent>
      <About />
      <Experience>
        <h2>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
        <h3>React Native Developer, Microsoft</h3>
      </Experience>
    </StyledResumeComponent>
  );
}

const StyledResumeComponent = styled.div`
  padding: 4.8rem 7.5rem 4.4rem 8rem;
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

const Experience = styled.div`
  & > h2 {
    margin-top: 2.4rem;
  }

  & > h3 {
    margin-top: 1.5rem;
  }
`;

export default ResumeComponent;
