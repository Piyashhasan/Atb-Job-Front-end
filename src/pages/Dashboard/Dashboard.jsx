import { IoSearch } from "react-icons/io5";
import { TbBellRinging } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import JobViewGraph from "../../components/JobViewGraph/JobViewGraph";
import PostedJob from "../../components/PostedJob/PostedJob";
import { useSidebar } from "../../context/SidebarContext";

export default function Dashboard() {
  // --- dashboard sidebar hide/show context ---
  const { showSidebar } = useSidebar();

  return (
    <div className="p-4 sm:px-8 sm:py-7">
      <div className="flex items-center justify-between xl:justify-end gap-10">
        <div className="xl:hidden" onClick={showSidebar}>
          <GiHamburgerMenu className="text-2xl" />
        </div>
        <div className="hidden sm:flex items-center bg-[#E4E9E7] px-5 rounded-full">
          <IoSearch className="text-[25px] text-gray-700" />
          <input
            className="border px-5 py-2 bg-[#E4E9E7] text-black outline-none"
            type="text"
            placeholder="Search Here"
          />
        </div>
        <div className="items-center gap-5 hidden md:flex">
          <TbBellRinging className="text-[26px] text-gray-700" />
          <button className="bg-[#2563EB] hover:bg-blue-700 transition-all py-2 px-6 text-white rounded-full">
            Post a Job
          </button>
        </div>
      </div>

      <div className="xl:h-[calc(100vh-130px)] overflow-y-auto mt-8 xl:pr-2">
        {/* --- tracking card --- */}
        <DashboardCard />
        {/* --- tracking card --- */}

        {/* --- chart + posted job card --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <div className="bg-white w-full rounded-3xl p-6">
            <JobViewGraph />
          </div>
          <div className="bg-white w-full rounded-3xl p-6">
            <PostedJob />
          </div>
        </div>
        {/* --- chart + posted job card --- */}
      </div>
    </div>
  );
}
