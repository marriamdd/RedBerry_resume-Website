import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationPage, { FormData } from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import PersonalPage from "./pages/PersonalPage";
import ResumePage from "./pages/ResumePage";
import Layout from "./layout/Layout";
import { GlobalStyles } from "./globalStyles/GlobalStyles";

export interface IExperience {
  experience: {
    position: string;
    employer: string;
    date_started: string;
    date_finished: string;
    description: string;
  }[];
}

export interface IFormInput {
  name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  state: string;
  data: string;
  info: string;
  file: FileList | null;
  e: string;
  personal: IFormInput[];
}

export interface IContext {
  experienceData: IExperience;
  setExperienceData: React.Dispatch<React.SetStateAction<IExperience>>;
  currentPageNumber: number;
  showExperienceInResume: boolean;
  setShowExperienceInResume: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
  personalData: IFormInput;
  setPersonalData: React.Dispatch<React.SetStateAction<IFormInput>>;
  educationData: FormData;
  setEducationData: React.Dispatch<React.SetStateAction<FormData>>;
}

export interface IWholeResume {
  education: FormData;
  experience: IExperience;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  state: string;
  data: string;
  info: string;
  file: FileList | null;
  e: string;
  personal: IFormInput[];
}

export const Context = createContext<IContext>({
  currentPageNumber: 1,
  setCurrentPageNumber: () => {},
  experienceData: {
    experience: [],
  },
  setExperienceData: () => {},
  showExperienceInResume: false,
  setShowExperienceInResume: () => {},
  personalData: {
    name: "",
    last_name: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    data: "",
    info: "",
    file: null,
    e: "",
    personal: [],
  },
  setPersonalData: () => {},
  educationData: {
    education: [],
  },
  setEducationData: () => {},
});

function App() {
  const [showExperienceInResume, setShowExperienceInResume] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [experienceData, setExperienceData] = useState<IExperience>(() => {
    const data = localStorage.getItem("resume");
    if (data) {
      return JSON.parse(data).experience as IExperience;
    }
    return { experience: [] };
  });

  const [personalData, setPersonalData] = useState<IFormInput>(() => {
    const data = localStorage.getItem("resume");
    if (data) {
      return JSON.parse(data).personaldata as IFormInput;
    }
    return {
      name: "",
      last_name: "",
      phone: "",
      email: "",
      address: "",
      state: "",
      data: "",
      info: "",
      file: null,
      e: "",
      personal: [],
    };
  });

  const [educationData, setEducationData] = useState<FormData>(() => {
    const data = localStorage.getItem("resume");
    if (data) {
      console.log(JSON.parse(data).education);
      return JSON.parse(data).education as FormData;
    }
    return { education: [] };
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
          showExperienceInResume,
          setShowExperienceInResume,
          personalData,
          setPersonalData,
          educationData,
          setEducationData,
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
