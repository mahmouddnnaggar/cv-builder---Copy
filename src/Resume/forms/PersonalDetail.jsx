import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import Image from "next/image";
import { useContext } from "react";
import aiImg from "../../assets/img/ai_star.png";

export default function PersonalDetail() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  }

  return (
    <div className="form-container">
      {/* <h2 className="font-bold text-lg">Personal Detail</h2> */}

      <form>
        <div className="grid w-full grid-cols-2  justify-center gap-3">
          <div className="col-span-1">
            <label className="label  ">First Name</label>
            <input
              type="text"
              name="firstName"
              className="input-res"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-1">
            <label className="label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="input-res"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-1">
            <label className="label">Phone</label>
            <input
              type="tel"
              name="phone"
              className="input-res"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-1">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input-res"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="label">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              className="input-res"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input-res"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <div className="flex justify-between items-center">
              {" "}
              <label className="label">Objective</label>
              <button
                type="button"
                className="flex justify-center items-center gap-1 text-sm rounded px-1 py-[2px] bg-[#efefef]"
              >
                {" "}
                <Image
                  src={aiImg}
                  alt="aiImg"
                  width={20}
                  height={20}
                  className="object-cover"
                />{" "}
                AI Generate
              </button>
            </div>

            <textarea
              type="text"
              name="summery"
              className="input-res"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end"></div>
      </form>
    </div>
  );
}
