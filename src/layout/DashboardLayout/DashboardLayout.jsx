import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSideBar/DashboardSidebar";
import { Sidebar } from "primereact/sidebar";
import { useSidebar } from "../../context/SidebarContext";

const DashboardLayout = () => {
  const { visible, hideSidebar } = useSidebar();
  return (
    <>
      <div className="grid grid-cols-12 xl:h-[calc(100vh-0px)]">
        <div className="col-span-2 hidden xl:block">
          <DashboardSidebar />
        </div>
        <div className="col-span-12 xl:col-span-10 bg-[#F0F5F3] xl:rounded-tl-[40px]">
          <Outlet />
        </div>
      </div>

      <Sidebar
        visible={visible}
        onHide={hideSidebar}
        className="md:w-20rem lg:w-30rem"
      >
        <DashboardSidebar />
      </Sidebar>
    </>
  );
};

export default DashboardLayout;
