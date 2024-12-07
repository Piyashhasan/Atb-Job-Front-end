export default function UserInfoEditForm() {
  return (
    <>
      <h3 className="text-center text-xl text-black pb-5">User Information</h3>
      <hr />
      <div className="flex justify-center">
        <form className="w-full p-5">
          <div className="flex flex-col">
            <label className="text-black" htmlFor="name">
              Name
            </label>
            <input
              className="border mt-2 outline-none px-2 py-2 rounded-md"
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-black" htmlFor="nickName">
              Nick Name
            </label>
            <input
              className="border mt-2 outline-none px-2 py-2 rounded-md"
              type="text"
              name="nickName"
              placeholder="nick name"
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
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-black" htmlFor="phone">
              Address
            </label>
            <input
              className="border mt-2 outline-none px-2 py-2 rounded-md"
              type="text"
              name="address"
              placeholder="address"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 px-7 py-1 rounded-full text-white mt-3 hover:bg-blue-700 transition-all">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
