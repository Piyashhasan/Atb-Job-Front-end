export default function EmployerInfoEditForm() {
  return (
    <>
      <h3 className="text-center text-xl text-black pb-5">
        Employe Information
      </h3>
      <hr />
      <div className="flex justify-center">
        <form className="py-5  w-full px-5">
          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-5">
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="name">
                Employer Name
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="employerName"
                placeholder="name"
              />
            </div>
            <div className="flex flex-wrap md:flex-nowrap flex-col  w-full">
              <label className="text-black" htmlFor="nickName">
                Headline
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="headline"
                placeholder="headline"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-5 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Description
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="description"
                placeholder="description"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Nick Name
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="nickName"
                placeholder="nick name"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-5 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Address
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="address"
                placeholder="address"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Location
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="location"
                placeholder="location"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-5 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Public Status
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="publicStatus"
                placeholder="public status"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Company Type
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="companyType"
                placeholder="company type"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-5 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Custom Location
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="customLocation"
                placeholder="custom location"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Slug
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="slug"
                placeholder="slug"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-5 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Type of business
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="text"
                name="typeOfBusiness"
                placeholder="type of business"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Total office
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md w-full"
                type="number"
                name="totalOffice"
                placeholder="total office"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-5 mt-4">
            <div className="flex flex-col w-full">
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

            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Number of employee
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md"
                type="number"
                name="numberOfEmployee"
                placeholder="number of employee"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-5 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Website Link
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md"
                type="text"
                name="webSite"
                placeholder="website link"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-black" htmlFor="phone">
                Youtube Link
              </label>
              <input
                className="border mt-2 outline-none px-2 py-2 rounded-md"
                type="text"
                name="youTube"
                placeholder="youTube link"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 px-7 py-1 rounded-full text-white mt-3 hover:bg-blue-700 transition-all">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
