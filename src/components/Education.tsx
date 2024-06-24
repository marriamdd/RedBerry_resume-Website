import styled from "styled-components";

export default function Education() {
  return (
    <StyledEducation>
      <h2>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h2>
      <h3>წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი</h3>
      <p className="date">2020-09-09</p>
      <p className="education-text">
        ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
        კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
        მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
        ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
      </p>
    </StyledEducation>
  );
}

const StyledEducation = styled.div`
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
