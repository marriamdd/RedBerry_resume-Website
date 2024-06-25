import styled from "styled-components";
import bgPattern from "../assets/cover.jpeg";

interface StyledDivProps {
  bgPattern: string;
}

const StyledDiv = styled.div<StyledDivProps>`
  background-image: url(${(props) => props.bgPattern});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 7rem;
  padding-top: 2.5rem;
  & > hr {
    margin-top: 26px;
  }
  & > img {
    width: 246px;
    height: 38px;
  }

  & > hr {
    width: 100%;
    height: 1px;
    background: #1a1a1a;
    margin-top: 26px;
    border-top-style: solid;
  }
`;

const HomePage = () => (
  <StyledDiv bgPattern={bgPattern}>
    <img src="src/assets/MainLogo.png" alt="Main Logo" />
    <hr />
  </StyledDiv>
);

export default HomePage;
