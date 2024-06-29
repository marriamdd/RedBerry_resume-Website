import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";

export default function Education() {
  const { educationData } = useContext(Context);
  return (
    <StyledEducation>
      <h2>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h2>
      {educationData.education?.map((item, index) => {
        return (
          <div key={index}>
            <h3>
              {item.university} {item.degree.length !== 0 && ","} {item.degree}
            </h3>
            <p className="date">{item.finish_date}</p>
            <p className="education-text">{item.description}</p>
          </div>
        );
      })}
    </StyledEducation>
  );
}

const StyledEducation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  & > div {
    & > h3 {
      margin-top: 1.5rem;
    }

    & > .date {
      margin-top: 0.7rem;
    }

    & > .education-text {
      margin-top: 1.6rem;
    }
  }
  & > h2 {
    margin-top: 2.6rem;
  }
`;
