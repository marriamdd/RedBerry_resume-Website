import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import PersonalPage from './pages/PersonalPage';
import ResumePage from './pages/ResumePage';
import Layout from './layout/Layout';
import { GlobalStyles } from './globalStyles/GlobalStyles';

export interface IExperience {
  experience: {
    position: string;
    employer: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

export interface IFormInput {
  name: string;
  surname: string;
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
    surname: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    data: "",
    info: "",
    file: null,
    e: "",
    personal: []
  },
  setPersonalData: () => {},
});

function App() {
  const [showExperienceInResume, setShowExperienceInResume] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [experienceData, setExperienceData] = useState<IExperience>(() => {
    const data = localStorage.getItem('resume');
    if (data) {
      return JSON.parse(data) as IExperience;
    }
    return { experience: [] };
  });

  const [personalData, setPersonalData] = useState<IFormInput>(() => {
    const data = localStorage.getItem('resume');
    if (data) {
      return JSON.parse(data) as IFormInput;
    }
    return {
      name: '',
      surname: '',
      phone: '',
      email: '',
      address: '',
      state: '',
      data: '',
      info: '',
      file: null,
      e: '',
      personal: [],
    };
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
