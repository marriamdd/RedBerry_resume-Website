import styled from "styled-components";
import emailIcon from "../assets/emailSymbol.png";
import phoneIcon from "../assets/phone.png";
import userProfile from "../assets/userImage.png";

export default function About() {
  return (
    <StyledAbout>
      <Information>
        <h1>
          <span>ანზორ</span>
          <span>მუმლაძე</span>
        </h1>

        <div className="email">
          <img src={emailIcon} alt="emailIcon" />
          <h3>anzorr666@redberry.ge</h3>
        </div>

        <div className="phone">
          <img src={phoneIcon} alt="phoneIcon" />
          <h3>+995 597 63 45 16</h3>
        </div>

        <AboutMeText>
          <h2>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h2>
          <p>
            ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
            გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
          </p>
        </AboutMeText>
      </Information>
      <img src={userProfile} alt="user-profile" />
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  display: flex;
  border-bottom: 1px solid #c8c8c8;
  padding-bottom: 1.9rem;

  & > img {
    width: 246px;
    height: 246px;
  }
`;

const Information = styled.div`
  .email {
    margin-top: 1.7rem;
    display: flex;
    gap: 1rem;
  }

  .phone {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
`;

const AboutMeText = styled.div`
  margin-top: 3.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: 1980px) {
    & > p {
      width: 43.2rem;
    }
  }
`;
