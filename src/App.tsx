import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import PersonalPage from "./pages/PersonalPage";
import ResumePage from "./pages/ResumePage";
import Layout from "./layout/Layout";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { createContext, useState } from "react";

export interface IContext {
  currentPageNumber: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = createContext< IContext >(
  currentPageNumber:1,
  setCurrentPageNumber:()=>{}
);
function App() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  return (
    <>
      <GlobalStyles />
      <Context.Provider value={{currentPageNumber,
  setCurrentPageNumber}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
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
