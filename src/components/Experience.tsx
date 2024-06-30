import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";

export default function Experience() {
  const { experienceData } = useContext(Context);
  console.log(experienceData.experience, "experienceData");
  return (
    <>
      {
        <StyledExperience>
          <h2>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>

          {experienceData.experience?.map((item, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                width: "100%",
              }}
              key={index}
            >
              <div style={{ display: "flex" }}>
                <h3>{`${item.position} `}</h3>

                {item.employer && <h3>&nbsp;, {item.employer}</h3>}
              </div>

              <div style={{ display: "flex" }}>
                <span>{`${item.date_started} `}</span>

                {item.date_finished && (
                  <span>&nbsp; - {item.date_finished}</span>
                )}
              </div>
              <p className="experience-text">{item.description}</p>
            </div>
          ))}
        </StyledExperience>
      }
    </>
  );
}

const StyledExperience = styled.div`
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 3.2rem;
  width: 100%;

  h2 {
    margin-top: 2.4rem;
  }
  span {
    color: #909090;
    font-size: 1.6rem;
    font-weight: 400;
  }
  h3 {
    margin-top: 1.5rem;
    font-size: 1.6rem;

    color: var(--off-black, #1a1a1a);

    font-size: 1.7rem;
    font-weight: 700;
  }

  p {
    margin-top: 0.7rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
  }

  .experience-text {
    margin-top: 1.6rem;
  }
`;
