import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import PersonalPage from "./pages/PersonalPage";
import ResumePage from "./pages/ResumePage";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
