import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";

export default function MainLayout() {
  return (
    <div className={`h-[calc(100vh-0px)] bg-custom-bg bg-cover bg-no-repeat`}>
      <NavBar />
      <Outlet />
    </div>
  );
}
