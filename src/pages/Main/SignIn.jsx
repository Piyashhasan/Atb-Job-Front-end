import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../feature/api/apiSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../feature/auth/authSlice";

export default function SignIn() {
  const [signIn, { isLoading, isError, error, isSuccess }] =
    useSignInMutation();

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  // --- form state ---
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // --- handle signIn form submit ---
  const onSubmit = async (data) => {
    if (data) {
      const res = await signIn(data);

      if (res?.data?.statusCode === 200) {
        const { accessToken, user } = res.data.data;

        // Save to localStorage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(setUser({ user, accessToken }));

        reset();
      }
    }
  };

  // --- toast handle ---
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading ...", { id: "signIn" });
    }

    if (!isLoading && isError) {
      if (error) {
        toast.error(error?.data?.message, { id: "signIn" });
      }
    }

    if (isSuccess) {
      toast.success("Sign In successfully", { id: "signIn" });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
    }
  }, [isSuccess, isLoading, isError, navigate, error]);

  return (
    <div className="wrapper py-5 px-2 sm:px-0">
      <div className="flex items-center justify-center">
        {/* --- sign in form start --- */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative m-[2rem] px-7 sm:px-10 py-14 rounded-lg w-full max-w-[520px] shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),_0px_0px_0px_1px_rgba(0,0,0,0.06)]"
        >
          <div className="relative z-10">
            <h1 className="mb-2 text-center text-[1.35rem] font-medium">
              Login to Your Account
            </h1>
            <p className="mb-8 px-[2rem] text-center text-[#999] text-[12px]">
              Login Now. Don&apos;t have an account?{" "}
              <Link
                to="/sign-up"
                className="font-bold text-[#0079C1] hover:text-[#155EAD] transition-all duration-300"
              >
                Register here
              </Link>
            </p>

            {/* --- Email input --- */}
            <div className="mt-[1rem] flex flex-col">
              <label htmlFor="email" className="mb-1 text-[#999]">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Enter a valid email",
                  },
                })}
                type="email"
                id="email"
                name="email"
                className={`px-4  py-3 border-[2px] rounded-md outline-[#0079C1] text-gray-800 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="johndoe@gmail.com"
              />
              {/* Error message for email */}
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* --- Password input --- */}
            <div className="relative mt-[1rem] flex flex-col justify-center">
              <label htmlFor="password" className="mb-1 text-[#999]">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={`pl-4 pr-14 py-3 border-[2px] rounded-md outline-[#0079C1] text-gray-800 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="***************"
                autoComplete="password"
              />

              <button
                type="button"
                className="absolute p-1 right-4 top-[38px] text-[22px] text-[#999] opacity-45"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <IoMdEye className="text-[26px]" />
                ) : (
                  <IoMdEyeOff className="text-[26px]" />
                )}
              </button>
            </div>
            {/* Error message for password */}
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}

            {/* --- Submit button --- */}
            <div>
              <button
                type="submit"
                className="w-full mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#0079C1] text-white rounded-md hover:bg-[#155EAD] transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
        {/* --- sign in form end --- */}
      </div>
    </div>
  );
}
