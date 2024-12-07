import { Link } from "react-router-dom";
import handWave from "../../assets/images/hand_wave.png";
import headerImg from "../../assets/images/header_img.png";

export default function Home() {
  return (
    <div className="wrapper py-10">
      <div className="flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center">
            <img
              className="w-[180px] rounded-full mb-5"
              src={headerImg}
              alt="header image"
            />
          </div>
          <div className="flex items-center justify-center gap-5">
            <h5 className="text-2xl text-[#1D2531] font-semibold">
              Hey Developer..!
            </h5>
            <img className="w-10 h-10" src={handWave} alt="hande wave" />
          </div>
          <div className="text-center">
            <h1 className="text-[42px] text-[#1D2531] font-bold">
              Welcome to our app
            </h1>
            <p className="text-[#1D2531] mt-4">
              Lets start with a quick product tour and discover how easy it is
              <br /> get started..!
            </p>
            <Link to="/dashboard">
              <button className="text-[#1D2531] mt-8 px-8 py-2 rounded-full border border-[#1D2531] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
