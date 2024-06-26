import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import PersonalPage from "./pages/PersonalPage";
import ResumePage from "./pages/ResumePage";
import Layout from "./layout/Layout";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { createContext, useState } from "react";

export interface IExperience {
  experience: {
    position: string;
    employer: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

export interface IContext {
  experienceData: IExperience;
  setExperienceData: React.Dispatch<React.SetStateAction<IExperience>>;
  currentPageNumber: number;

  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = createContext<IContext>({
  currentPageNumber: 1,
  setCurrentPageNumber: () => {},
  experienceData: {
    experience: [],
  },

  setExperienceData: () => {},
});
function App() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [experienceData, setExperienceData] = useState<IExperience>(() => {
    const data = localStorage.getItem("resume");
    if (data) {
      return JSON.parse(data) as IExperience;
    }
    return { experience: [] };
  });
  return (
    <>
      <GlobalStyles />
      <Context.Provider
        value={{
          currentPageNumber,
          setCurrentPageNumber,
          experienceData,
          setExperienceData,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<Layout />}>
              <Route path="/education" element={<EducationPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/personal" element={<PersonalPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
