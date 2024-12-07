import { Chip } from "primereact/chip";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { FaEdit } from "react-icons/fa";
import UserInfoEditForm from "../../components/UserInfoEditForm/UserInfoEditForm";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSidebar } from "../../context/SidebarContext";

export default function User() {
  const [visible, setVisible] = useState(false);
  const { showSidebar } = useSidebar();
  return (
    <>
      <div className="p-4 sm:px-8 sm:py-10 h-screen">
        <div className="flex items-center gap-5">
          <div className="xl:hidden" onClick={showSidebar}>
            <GiHamburgerMenu className="text-2xl" />
          </div>
          <h2 className="text-xl sm:text-2xl xl:text-4xl font-bold text-[#1D2531] leading-9">
            User Information
          </h2>
        </div>

        <div className="bg-white mt-10 px-5 py-5 rounded-3xl">
          <div className="flex items-center justify-end">
            <button
              onClick={() => setVisible(true)}
              className="flex items-center justify-end gap-2 bg-blue-500 px-5 py-1 rounded-full text-white hover:bg-blue-700 transition-all"
            >
              <span>Edit</span>
              <FaEdit className="text-lg" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-lg p-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-x-2">
                  <h2 className="text-xl font-bold text-gray-800">
                    Piyash Hasan
                  </h2>
                  <Chip
                    className="px-2 py-[1px] bg-green-400 text-white text-[12px]"
                    label="Verified"
                  />
                </div>
                <p className="text-gray-600 mb-4 mt-3">
                  piyashhasan38@gmail.com
                </p>
              </div>
              <div className="space-y-2 capitalize">
                <p className="text-gray-700">
                  <span className="font-semibold">Nick Name:</span> 239847234
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> 239847234
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> bogura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <UserInfoEditForm />
      </Dialog>
    </>
  );
}
