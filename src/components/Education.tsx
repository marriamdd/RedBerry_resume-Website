import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../App";

export default function Education() {
  const { educationData } = useContext(Context);
  return (
    <StyledEducation>
      <h2>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h2>;
      {educationData.education.map((item) => {
        return (
          <>
            <h3>
              {item.university}, {item.degree}
            </h3>
            <p className="date">{item.finish_date}</p>
            <p className="education-text">{item.description}</p>
          </>
        );
      })}
    </StyledEducation>
  );
}

const StyledEducation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  & > h2 {
    margin-top: 2.6rem;
  }

  & > h3 {
    margin-top: 1.5rem;
  }

  & > .date {
    margin-top: 0.7rem;
  }

  & > .education-text {
    margin-top: 1.6rem;
  }
`;
