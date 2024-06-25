import styled from "styled-components";

function PersonalPage() {
  const Header = styled.header`
    display: flex;
  `;

  const InfoContainer = styled.div`
    flex: 1;
    margin-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1a1a1a;

    & > h1 {
      font-weight: 700;
      font-size: 2.4rem;
    }

    & > p {
      font-weight: 400;
      font-size: 1.5rem;
    }
  `;

  const HeaderHr = styled.hr`
    width: 90%;
    margin-left: 6rem;
  `;
  return (
    <>
      <Header>
        <img src="src/assets/personalSvg.svg" alt="" />
        <InfoContainer>
          <h1>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
          <p>1/3</p>
        </InfoContainer>  
      </Header>
      <HeaderHr />
    </>
  );
}

export default PersonalPage;
