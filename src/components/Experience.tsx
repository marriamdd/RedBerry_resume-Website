import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";

export default function Experience() {
  const { experienceData, showExperienceInResume } = useContext(Context);

  return (
    <>
      {showExperienceInResume && (
        <StyledExperience>
          <h2>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>

          {experienceData.experience.map((item) => (
            <div>
              {item.position ||
                (item.employer && (
                  <div style={{ display: "flex" }}>
                    <h3>{item.position}</h3>
                    <h3>{` , ${item.employer}`}</h3>
                  </div>
                ))}

              {item.startDate ||
                (item.endDate && (
                  <p className="date">
                    {item.startDate} - {item.endDate}
                  </p>
                ))}
              <p className="experience-text">{item.description}</p>
            </div>
          ))}
        </StyledExperience>
      )}
    </>
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
    font-size: 1.6rem;
    font-weight: 500;
  }

  & > p {
    margin-top: 0.7rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
  }

  & > .experience-text {
    margin-top: 1.6rem;
  }
`;
