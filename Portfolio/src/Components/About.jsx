import React from "react";
import HoangHung from "../assets/HoangHung.jpg";
const About = () => {
  return (
    <div id="about" className="mt-[30px] text-center">
      <h1 className="text-[3rem] font-bold mb-[20px]">About Me</h1>
      <div className="flex gap-16">
        <div className="imgAvatar">
          <img className="rounded-[2rem] w-[300px]" src={HoangHung} alt="" />
        </div>
        <div className="w-full rightContent flex flex-col justify-center">
          <div className="flex my-8 gap-8">
            <div className=" flex flex-1 flex-col justify-center p-[1.5rem] rounded-[2.5rem] border border-black text-center">
              <svg
                className="h-[2rem]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokewidth="{1.5}"
                stroke="currentColor"
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <h3 className="font-bold text-2xl mb-2">Exprience</h3>
              <p>
                2+ years <br />
                Frontend Development
              </p>
            </div>
            <div className=" border-black flex flex-col justify-center flex-1 p-[1.5rem] rounded-[2.5rem] border text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokewidth="{1.5}"
                stroke="currentColor"
                className="h-[2rem]"
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <h3 className="font-bold text-2xl mb-2">Education</h3>
              <p>
                B.Sc. Bachelors Degree
                <br />
                M.Sc. Masters Degree
              </p>
            </div>
          </div>
          <div className="introduce mt-10">
            <p>
              Tôi tên là Bùi Đình Hoàng Hùng. sinh năm 2001. Hiện đang là sinh
              viên đại học Bách Khoa.<br></br>Tôi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
