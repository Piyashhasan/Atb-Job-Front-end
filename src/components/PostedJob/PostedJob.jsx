import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { postedJobs } from "../../utils/postedJobs";

export default function PostedJob() {
  return (
    <div>
      <p className="font-[500] text-xl text-[#1D2531] leading-6 pb-5">
        Posted Job
      </p>
      <hr />

      {postedJobs.map((job, index) => {
        return (
          <div key={index} className="flex items-center justify-between my-7">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10" src={job.imgUrl} alt={job.jobType} />
              <div>
                <p className="font-[500] leading-5">{job.jobType}</p>
                <p className="text-[14px] leading-5">{job.jobLocation}</p>
              </div>
            </div>
            <HiOutlineDotsHorizontal className="text-2xl" />
          </div>
        );
      })}
    </div>
  );
}
