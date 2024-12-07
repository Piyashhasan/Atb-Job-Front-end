import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <>
      <SidebarProvider>
        <Toaster />
        <RouterProvider router={routes} />
      </SidebarProvider>
    </>
  );
}

export default App;
