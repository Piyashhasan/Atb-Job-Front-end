import { createContext, useContext, useState } from "react";

// --- create the sidebar context ---
const SidebarContext = createContext();

// --- use sidebar context ---
// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  return useContext(SidebarContext);
};

// --- sidebarProvider component ---
export const SidebarProvider = ({ children }) => {
  // --- dashboard sidebar show hide state ---
  const [visible, setVisible] = useState(false);

  const showSidebar = () => setVisible(true);
  const hideSidebar = () => setVisible(false);

  return (
    <SidebarContext.Provider value={{ visible, showSidebar, hideSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
