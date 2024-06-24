import styled from "styled-components";

export default function Experience() {
  return (
    <StyledExperience>
      <h2>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      <h3>React Native Developer, Microsoft</h3>
      <p className="date">2020-09-23 - 2020-09-23</p>
      <p className="experience-text">
        Experienced Javascript Native Developer with 5 years in the industry.
        proficient withreact. Used problem-solving aptitude to encahge
        application performance by 14%.created data visualisation tools and
        integrated designs.
      </p>
    </StyledExperience>
  );
}

const StyledExperience = styled.div`
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 3.2rem;
  & > h2 {
    margin-top: 2.4rem;
  }

  & > h3 {
    margin-top: 1.5rem;
  }

  & > p {
    margin-top: 0.7rem;
  }

  & > .experience-text {
    margin-top: 1.6rem;
  }
`;
