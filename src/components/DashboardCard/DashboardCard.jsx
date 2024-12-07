import { PiBagBold } from "react-icons/pi";
import { FaPencilAlt, FaRegBookmark } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function DashboardCard() {
  return (
    <>
      <h2 className="text-4xl text-[#1D2531] font-[500] leading-9">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        <div className="w-full flex items-center justify-between p-5 bg-white rounded-3xl">
          <div>
            <h5 className="text-4xl text-[#1D2531] font-[500] leading-10">
              15k+
            </h5>
            <p className="mt-2">Total Job</p>
          </div>
          <div className="w-14 h-14 flex items-center  justify-center bg-blue-600 rounded-full">
            <PiBagBold className="text-white text-xl" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between p-5 bg-white rounded-3xl">
          <div>
            <h5 className="text-4xl text-[#1D2531] font-[500] leading-10">
              1k+
            </h5>
            <p className="mt-2">Applied Job</p>
          </div>
          <div className="w-14 h-14 flex items-center  justify-center bg-blue-600 rounded-full">
            <FaPencilAlt className="text-white text-xl" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between p-5 bg-white rounded-3xl">
          <div>
            <h5 className="text-4xl text-[#1D2531] font-[500] leading-10">
              200
            </h5>
            <p className="mt-2">Shortlisted</p>
          </div>
          <div className="w-14 h-14 flex items-center  justify-center bg-blue-600 rounded-full">
            <FaRegBookmark className="text-white text-xl" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between p-5 bg-white rounded-3xl">
          <div>
            <h5 className="text-4xl text-[#1D2531] font-[500] leading-10">
              1.7k+
            </h5>
            <p className="mt-2">Views</p>
          </div>
          <div className="w-14 h-14 flex items-center  justify-center bg-blue-600 rounded-full">
            <IoEyeSharp className="text-white text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}
