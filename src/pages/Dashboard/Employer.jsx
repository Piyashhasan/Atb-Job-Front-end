import { useState } from "react";
import { BsBrowserEdge } from "react-icons/bs";
import { FaYoutube, FaEdit } from "react-icons/fa";
import { Dialog } from "primereact/dialog";
import EmployerInfoEditForm from "../../components/EmployerInfoEditForm/EmployerInfoEditForm";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSidebar } from "../../context/SidebarContext";

export default function Employer() {
  const [visible, setVisible] = useState(false);

  const { showSidebar } = useSidebar();

  return (
    <>
      <div className="p-4 sm:px-8 sm:py-10">
        <div className="flex items-center gap-5">
          <div className="xl:hidden" onClick={showSidebar}>
            <GiHamburgerMenu className="text-2xl" />
          </div>
          <h2 className="text-xl sm:text-2xl xl:text-4xl font-bold text-[#1D2531] leading-9">
            Employer Information
          </h2>
        </div>
        <div className="bg-white mt-10 py-10 rounded-3xl">
          <div className="flex items-center justify-end px-6">
            <button
              onClick={() => setVisible(true)}
              className="flex items-center justify-end gap-2 bg-blue-500 px-5 py-1 rounded-full text-white hover:bg-blue-700 transition-all"
            >
              <span>Edit</span>
              <FaEdit className="text-lg" />
            </button>
          </div>
          <div className="rounded-lg p-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-800">
                Atb Lab Test Account
              </h2>
              <p className="text-gray-600 mb-4 mt-3">
                ( We make companies better )
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Description:</span> bogura
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-5">
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Nick Name:</span>{" "}
                  baseit.tanveer
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Profile Status:</span> Public
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Slug:</span>{" "}
                  atb-lab-test-account
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> 239847234
                </p>
              </div>

              <hr className="md:hidden" />

              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> bogura
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Company type:</span> bogura
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Type of business:</span>{" "}
                  bogura
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Number of employee:</span>{" "}
                  bogura
                </p>
              </div>

              <hr className="md:hidden" />

              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Location:</span> bogura
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Custom location:</span> bogura
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Total office:</span> bogura
                </p>
                <div className="flex items-center gap-5">
                  <BsBrowserEdge className="text-3xl" />
                  <FaYoutube className="text-3xl" />
                </div>
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
        <EmployerInfoEditForm />
      </Dialog>
    </>
  );
}
