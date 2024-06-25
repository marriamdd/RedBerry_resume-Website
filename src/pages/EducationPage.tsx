import styled from "styled-components";
import BackArrow from "../assets/Group 4.svg";
import { Line } from "../styles/Line";

function EducationPage() {
  return (
    <StyledEducation>
      <img src={BackArrow} alt="back-arrow" />
      <EducationFormDiv>
        <EducationHeader>
          <h2>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h2>
          <p>3/3</p>
        </EducationHeader>
        <Line />
      </EducationFormDiv>
    </StyledEducation>
  );
}

const StyledEducation = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 4.5rem 0rem 6.5rem 4.8rem;

  & > img {
    align-self: flex-start;
  }
`;

const EducationFormDiv = styled.div`
  width: 100%;
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.93rem;
    color: #1a1a1a;
  }

  & > p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.386rem;
    color: #1a1a1a;
  }
`;

export default EducationPage;
