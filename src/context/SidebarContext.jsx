// SidebarContext.js
import { createContext, useContext, useState } from "react";

// Create the Sidebar Context
const SidebarContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  return useContext(SidebarContext);
};

// SidebarProvider component
export const SidebarProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const showSidebar = () => setVisible(true);
  const hideSidebar = () => setVisible(false);

  return (
    <SidebarContext.Provider value={{ visible, showSidebar, hideSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
