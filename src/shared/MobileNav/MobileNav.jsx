import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

export default function MobileNav({ toggleMobileMenu, setToggleMobileMenu }) {
  return (
    <div className={`overly-effect ${toggleMobileMenu ? "open" : "close"}`}>
      <div
        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
        className="flex justify-end"
      >
        <ImCross className="text-2xl cursor-pointer text-[#0d0e43] mr-[19px] mt-[14px]" />
      </div>
      <div className="py-20">
        <ul className="flex flex-col items-center justify-center gap-8 font-bold text-lg">
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <Link
              className="py-3 px-8 text-white rounded-xl uppercase"
              to="/sign-in"
            >
              Sign In
            </Link>
          </li>

          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <Link
              className="py-3 px-8 text-white rounded-xl uppercase"
              to="/sign-up"
            >
              Sign Up
            </Link>
          </li>

          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <Link
              className="py-3 px-8 text-white rounded-xl uppercase"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
