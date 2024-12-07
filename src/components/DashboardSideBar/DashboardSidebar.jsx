import { Link, useLocation, useNavigate } from "react-router";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser, FaChalkboardUser } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useSidebar } from "../../context/SidebarContext";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../feature/auth/authSlice";
import { useLogOutQueryMutation } from "../../feature/api/apiSlice";

export default function DashboardSidebar() {
  // --- user get from store ---
  const { user } = useSelector((state) => state?.auth);

  // --- logout rtk query ---
  const [logOutQuery] = useLogOutQueryMutation();

  // --- active link ---
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // --- show/visible side bar context ---
  const { hideSidebar } = useSidebar();

  // --- dispatch ---
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logOutQuery();
    if (res?.data?.statusCode) {
      dispatch(logOut());
    }
    navigate("/sign-in");
  };

  return (
    <div className="py-7 flex flex-col items-center justify-center">
      <div>
        <Link to="/">
          <svg
            width="80"
            height="70"
            viewBox="0 0 151 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M113.214 92.4428C114.757 93.9448 116.295 95.4407 117.826 96.9304C118.316 97.4066 118.654 97.9493 118.46 98.6592C118.09 100.039 116.511 100.448 115.458 99.4355C114.047 98.078 112.643 96.7144 111.246 95.3446C111.086 95.1883 110.968 94.9915 110.815 94.7924C108.054 96.5315 105.181 96.9466 102.164 96.0509C99.8227 95.3564 98.0271 93.9033 96.7672 91.8589C94.5414 88.2509 95.0175 83.0858 98.5229 79.8958C101.983 76.7463 107.553 76.7138 110.999 79.2529C114.676 81.9645 116.453 87.4067 113.214 92.4428ZM111.418 86.9497C111.418 83.5709 108.628 80.7974 105.218 80.79C101.725 80.7827 98.8478 83.5598 98.8471 86.9386C98.8471 90.3011 101.705 93.096 105.145 93.0982C105.97 93.1007 106.787 92.9433 107.549 92.6351C108.311 92.327 109.004 91.8742 109.587 91.3027C110.17 90.7313 110.632 90.0525 110.946 89.3054C111.26 88.5584 111.421 87.7577 111.418 86.9497Z"
              fill="#00457C"
            ></path>
            <path
              d="M127.567 82.0322C128.391 82.4996 129.279 82.9523 130.114 83.4868C133.709 85.7899 133.649 90.8149 131.195 93.4557C129.397 95.3924 127.284 96.6177 124.486 96.4784C122.701 96.3914 120.906 96.4622 119.07 96.4622V75.3771C119.263 75.3676 119.461 75.3484 119.659 75.3477C121.205 75.3477 122.751 75.3477 124.297 75.3477C125.938 75.3477 127.295 75.9699 128.391 77.1539C129.056 77.8609 129.42 78.7899 129.409 79.7512C129.413 81.034 128.667 81.7543 127.567 82.0322ZM122.318 93.7005C123.026 93.7005 123.702 93.6658 124.373 93.7064C126.577 93.8391 128 92.6285 129.021 90.9572C129.96 89.4186 129.778 87.8129 128.668 86.3686C127.351 84.6553 124.473 83.7529 122.318 84.3427V93.7005ZM122.306 81.452C123.189 81.4078 124.012 81.4328 124.812 81.3097C125.648 81.1814 126.162 80.5474 126.19 79.8264C126.218 79.1054 125.685 78.3519 124.872 78.2163C124.039 78.0769 123.175 78.1108 122.306 78.0688V81.452Z"
              fill="#00457C"
            ></path>
            <path
              d="M148.662 79.0733L145.728 80.0465C145.57 79.7457 145.436 79.4766 145.288 79.2134C144.47 77.75 142.4 77.3703 141.088 78.4422C140.018 79.3151 139.956 80.7727 141.083 81.5674C141.936 82.1591 142.867 82.6348 143.851 82.9814C145.573 83.5963 147.204 84.3379 148.57 85.5507C151.476 88.131 151.466 92.0635 148.563 94.646C145.468 97.3981 140.333 97.4003 137.24 94.6512C136.074 93.619 135.334 92.2065 135.07 90.4651C135.577 90.3074 136.097 90.1422 136.618 89.9822C137.127 89.8259 137.637 89.6733 138.182 89.5089C138.242 89.7773 138.297 90.008 138.344 90.241C138.976 93.4266 142.406 94.9593 145.319 93.3625C147.978 91.9027 148.239 88.8697 145.779 87.1232C144.845 86.4597 143.748 85.9798 142.665 85.5662C141.315 85.0501 139.977 84.5451 138.846 83.6339C136.368 81.6397 136.378 78.4135 138.861 76.4252C140.943 74.7583 144.277 74.63 146.501 76.1126C147.569 76.8262 148.212 77.8237 148.662 79.0733Z"
              fill="#00457C"
            ></path>
            <path
              d="M84.4215 91.0864C84.6562 91.7337 84.8202 92.3206 85.0774 92.8639C85.4716 93.6977 86.3381 94.0435 87.3694 93.857C88.4308 93.6631 88.7836 93.2797 88.8904 92.1901C88.916 91.9291 88.9197 91.6659 88.9205 91.4042C88.9205 86.3349 88.9205 81.2657 88.9205 76.1964V75.3906H92.1618C92.1738 75.5705 92.1949 75.7452 92.1949 75.92C92.1949 81.1912 92.1949 86.4625 92.1949 91.7337C92.1949 94.1792 91.0861 95.7052 88.8596 96.3997C86.5849 97.1089 84.013 96.3761 82.729 94.6503C82.2075 93.9657 81.9246 93.135 81.9219 92.2808C81.9219 92.1282 82.052 91.8849 82.1821 91.8384C82.9058 91.5634 83.6535 91.3378 84.4215 91.0864Z"
              fill="#00457C"
            ></path>
            <path
              d="M107.038 84.102C107.577 84.102 108.069 84.1065 108.56 84.102C109.091 84.0954 109.373 84.3542 109.388 84.8644C109.404 85.4077 109.388 85.9525 109.388 86.5438H100.997C100.997 85.9437 100.986 85.3812 100.997 84.8187C101.008 84.3579 101.274 84.1161 101.739 84.1065C102.252 84.0962 102.765 84.1065 103.24 84.1065C103.302 84.0254 103.343 83.9974 103.347 83.9642C103.469 82.9062 103.469 82.9062 104.556 82.9062C105.071 82.9062 105.587 82.9062 106.102 82.9062C106.897 82.9062 106.946 82.9542 106.989 83.7113C106.998 83.8079 107.015 83.9037 107.038 84.102ZM105.186 84.102C105.493 84.102 105.805 84.1323 106.105 84.0866C106.227 84.0681 106.323 83.8831 106.43 83.774C106.328 83.6804 106.229 83.5093 106.122 83.5041C105.51 83.4783 104.894 83.4747 104.282 83.5041C104.168 83.51 104.066 83.7076 103.958 83.8167C104.06 83.9111 104.154 84.0726 104.267 84.0866C104.571 84.1249 104.879 84.0976 105.186 84.0984V84.102Z"
              fill="#1D1E1B"
            ></path>
            <path
              d="M100.997 87.0508H104.029C104.123 87.3678 104.132 87.8735 104.329 87.9554C104.718 88.1183 105.207 88.046 105.655 88.077C106.467 88.133 106.145 87.4577 106.318 87.0633H109.382C109.382 87.8249 109.431 88.5872 109.351 89.3362C109.328 89.553 108.938 89.898 108.711 89.9017C106.366 89.9437 104.02 89.9297 101.674 89.9245C101.254 89.9245 101.016 89.6835 101.005 89.2853C100.982 88.5621 100.997 87.8389 100.997 87.0508Z"
              fill="#1D1E1B"
            ></path>
            <path
              d="M105.766 87.0361V87.6119C105.465 87.6119 105.18 87.6392 104.909 87.5987C104.803 87.5824 104.648 87.4144 104.648 87.3156C104.648 87.2168 104.812 87.0656 104.921 87.0487C105.173 87.0096 105.442 87.0361 105.766 87.0361Z"
              fill="#1D1E1B"
            ></path>
            <path
              d="M27.4458 20.4648C12.6987 20.4648 0.742188 32.1869 0.742188 46.6368C0.742188 61.0867 12.7024 72.8169 27.4458 72.8169C42.1893 72.8169 54.1578 61.0948 54.1578 46.6368C54.1578 32.1788 42.199 20.4648 27.4458 20.4648ZM27.157 64.6173C17.1269 64.6173 8.98948 56.6426 8.98948 46.8115C8.98948 36.9805 17.1269 29.0006 27.157 29.0006C37.187 29.0006 45.3305 36.976 45.3305 46.8115C45.3305 56.647 37.193 64.6173 27.157 64.6173Z"
              fill="#00457C"
            ></path>
            <path
              d="M55.6616 20.457H45.2266V72.1316H55.6616V20.457Z"
              fill="#1D1E1B"
            ></path>
            <path
              d="M66.9688 12.5078H76.6595V72.0582H67.1222L66.9688 12.5078Z"
              fill="#1D1E1B"
            ></path>
            <path
              d="M59.4375 29.0898H83.9725V37.7583H59.4375V29.0898Z"
              fill="#1D1E1B"
            ></path>
            <path
              d="M126.737 47.4863C124.697 38.2391 116.518 34.1422 115.433 33.6159C116.506 32.4945 120.946 27.6287 120.969 20.1981C120.987 13.8638 117.779 9.55313 116.813 8.28729C112.231 2.30534 105.774 0.797691 104.046 0.450452L86.8203 0V72.211H108.514C109.876 71.9972 119.139 70.379 124.205 61.9582C125.433 59.8999 128.258 54.3802 126.737 47.4863ZM96.6653 9.79421C101.436 8.59177 106.259 9.77652 108.972 12.9643C111.454 15.8823 111.331 19.4948 111.277 20.9567C111.218 22.7652 111.082 26.6777 107.892 29.244C105.038 31.5442 101.565 31.2958 100.663 31.2088L96.5119 31.0532L96.6653 9.79421ZM116.659 54.1214C115.48 57.9005 112.472 59.7244 111.276 60.4491C107.755 62.5871 104.253 62.5067 102.973 62.4146H96.9707L96.8203 40.4014H106.514C107.021 40.4132 112.216 40.638 115.283 45.077C115.527 45.4345 118.145 49.3699 116.659 54.1214Z"
              fill="#1D1E1B"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="my-8 flex flex-col items-center">
        <img
          className="w-20 h-20 rounded-full object-cover object-top"
          src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_03.f35eb58b.jpg&w=96&q=75"
          alt=""
        />
        <p className="font-[500] leading-7 mt-3">
          {user?.fullName ? user?.fullName : ""}
        </p>
      </div>
      <div className="mt-5">
        <ul className="flex flex-col gap-y-8">
          <li>
            <Link
              to=""
              className={`flex items-center gap-2 ${
                isActive("/dashboard") ? "text-blue-500" : ""
              }`}
              onClick={hideSidebar}
            >
              <LuLayoutDashboard className="text-2xl" />
              <span className="font-[500] text-[18px]">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="user"
              className={`flex items-center gap-2 ${
                isActive("/dashboard/user") ? "text-blue-500" : ""
              }`}
              onClick={hideSidebar}
            >
              <FaRegUser className="text-2xl" />
              <span className="font-[500] text-[18px]">User</span>
            </Link>
          </li>
          <li>
            <Link
              to="employer"
              className={`flex items-center gap-2 ${
                isActive("/dashboard/employer") ? "text-blue-500" : ""
              }`}
              onClick={hideSidebar}
            >
              <FaChalkboardUser className="text-2xl" />
              <span className="font-[500] text-[18px]">Employer</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLogout}
              to=""
              className={`flex items-center gap-2 `}
            >
              <RiLogoutCircleLine className="text-2xl" />
              <span className="font-[500] text-[18px]">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
