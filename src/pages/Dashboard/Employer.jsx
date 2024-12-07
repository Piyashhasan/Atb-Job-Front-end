import { BsBrowserEdge } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSidebar } from "../../context/SidebarContext";
import { useGetEmployeeInfoQuery } from "../../feature/api/apiSlice";

export default function Employer() {
  const { data, isLoading, isError } = useGetEmployeeInfoQuery();

  const { showSidebar } = useSidebar();

  if (isLoading) {
    return <p className="text-center pt-20">Loading....</p>;
  }

  if (isError) {
    return <p className="text-center pt-20">Error from server....</p>;
  }

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
          <div className="rounded-lg p-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-800">
                {data?.employer[0]?.employer_name
                  ? data?.employer[0]?.employer_name
                  : "N/A"}
              </h2>
              <p className="text-gray-600 mb-4 mt-3">
                ({" "}
                {data?.employer[0]?.headline
                  ? data?.employer[0]?.headline
                  : "N/A"}{" "}
                )
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Description:</span>{" "}
                {data?.employer[0]?.desc ? data?.employer[0]?.desc : "N/A"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-5">
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Nick Name:</span>{" "}
                  {data?.employer[0]?.nickname
                    ? data?.employer[0]?.nickname
                    : "N/A"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Profile Status:</span>{" "}
                  {data?.employer[0]?.profile_status
                    ? data?.employer[0]?.profile_status
                    : "N/A"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Slug:</span>{" "}
                  {data?.employer[0]?.slug ? data?.employer[0]?.slug : "N/A"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span>{" "}
                  {data?.employer[0]?.contact
                    ? data?.employer[0]?.contact
                    : "N/A"}
                </p>
              </div>

              <hr className="md:hidden" />

              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span>{" "}
                  {data?.employer[0]?.map_location
                    ? data?.employer[0]?.map_location
                    : "N/A"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Company type:</span>{" "}
                  {data?.employer[0]?.company_type
                    ? data?.employer[0]?.company_type
                    : "N/A"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Type of business:</span>{" "}
                  {data?.employer[0]?.type_of_business
                    ? data?.employer[0]?.type_of_business
                    : "N/A"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Number of employee:</span>{" "}
                  {data?.employer[0]?.number_of_employee
                    ? data?.employer[0]?.number_of_employee
                    : "N/A"}
                </p>
              </div>

              <hr className="md:hidden" />

              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Custom location:</span>{" "}
                  {data?.employer[0]?.custom_location
                    ? data?.employer[0]?.custom_location
                    : "N/A"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Total office:</span>{" "}
                  {data?.employer[0]?.total_offices
                    ? data?.employer[0]?.total_offices
                    : "N/A"}
                </p>
                <div className="flex items-center gap-5">
                  <a
                    href={data?.employer[0]?.web ? data?.employer[0]?.web : "#"}
                    target="_blank"
                  >
                    <BsBrowserEdge className="text-3xl" />
                  </a>
                  <a
                    href={
                      data?.employer[0]?.video ? data?.employer[0]?.video : "#"
                    }
                    target="_blank"
                  >
                    <FaYoutube className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
