import { Outlet } from "react-router-dom";
import ResumeComponent from "../components/ResumeComponent";

function Layout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <div>
        <ResumeComponent />
      </div>
    </div>
  );
}

export default Layout;
