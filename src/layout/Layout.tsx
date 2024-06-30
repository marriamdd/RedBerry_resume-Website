import { Outlet } from "react-router-dom";
import ResumeComponent from "../components/ResumeComponent";
import styled from "styled-components";

function Layout() {
  return (
    <StyledLayout>
      <>
        <Main>
          <Outlet />
        </Main>
        <CvContainer>
          <ResumeComponent />
        </CvContainer>
      </>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  gap: 12.6rem;
`;

const Main = styled.main`
  /* width: 55%; */
  width: 100%;
  /* padding: 4.5rem 4.8rem; */
`;

const CvContainer = styled.div`
  /* width: 45%; */
  width: 100%;
  background: #ffffff;
`;

export default Layout;
