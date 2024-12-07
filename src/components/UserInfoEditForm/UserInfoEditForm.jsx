import { useEffect, useState } from "react";
import {
  useGetUserInfoQuery,
  useUserUpdateMutation,
} from "../../feature/api/apiSlice";
import toast from "react-hot-toast";

export default function UserInfoEditForm({ setVisible }) {
  const { data } = useGetUserInfoQuery();

  const [userUpdate, { isLoading, isError, error, isSuccess }] =
    useUserUpdateMutation();

  // State for form inputs
  const [formData, setFormData] = useState({
    nickName: data?.data?.nickName || "",
    phone: data?.data?.phone || "",
    address: data?.data?.address || "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData) {
      const res = await userUpdate(formData);
      if (res?.data?.statusCode) {
        setVisible(false);
      }
    }
  };

  // --- toast handle ---
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading ...", { id: "updateUserInfo" });
    }

    if (!isLoading && isError) {
      if (error) {
        toast.error(error?.data?.message, { id: "updateUserInfo" });
      }
    }

    if (isSuccess) {
      toast.success("Update user info", { id: "updateUserInfo" });
    }
  }, [isSuccess, isLoading, isError, error]);

  return (
    <>
      <h3 className="text-center text-xl text-black pb-5">User Information</h3>
      <hr />
      <div className="flex justify-center">
        <form className="w-full p-5" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-3">
            <label className="text-black" htmlFor="nickName">
              Nick Name
            </label>
            <input
              className="border mt-2 outline-none px-2 py-2 rounded-md"
              type="text"
              name="nickName"
              placeholder="nick name"
              value={formData.nickName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-black" htmlFor="phone">
              Phone
            </label>
            <input
              className="border mt-2 outline-none px-2 py-2 rounded-md"
              type="number"
              name="phone"
              placeholder="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-black" htmlFor="address">
              Address
            </label>
            <input
              className="border mt-2 outline-none px-2 py-2 rounded-md"
              type="text"
              name="address"
              placeholder="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 px-7 py-1 rounded-full text-white mt-3 hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
