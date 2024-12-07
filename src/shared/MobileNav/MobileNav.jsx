import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogOutQueryMutation } from "../../feature/api/apiSlice";
import { logOut } from "../../feature/auth/authSlice";

export default function MobileNav({ toggleMobileMenu, setToggleMobileMenu }) {
  // --- get userInfo + token from store ---
  const { user, accessToken } = useSelector((state) => state.auth);

  // --- logout rtk query ---
  const [logOutQuery] = useLogOutQueryMutation();

  // --- dispatch ---
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // --- handle logout ---
  const handleLogout = async () => {
    const res = await logOutQuery();
    if (res?.data?.statusCode) {
      dispatch(logOut());
    }
    navigate("/sign-in");
  };

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
          {!accessToken && !user?.email && (
            <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              <Link
                className="py-3 px-8 text-white rounded-xl uppercase"
                to="/sign-in"
              >
                Sign In
              </Link>
            </li>
          )}

          {!accessToken && !user?.email && (
            <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              <Link
                className="py-3 px-8 text-white rounded-xl uppercase"
                to="/sign-up"
              >
                Sign Up
              </Link>
            </li>
          )}

          {accessToken && user?.email && (
            <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              <Link
                className="py-3 px-8 text-white rounded-xl uppercase"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {accessToken && user?.email && (
            <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              <Link
                onClick={handleLogout}
                className="py-3 px-8 text-white rounded-xl uppercase"
                to="/"
              >
                Log out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
