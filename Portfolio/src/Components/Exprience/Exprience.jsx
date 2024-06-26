import React from "react";
import Skill from "./Skill";
const Exprience = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-bold text-3xl">Exprience</h1>
      <div className="mt-10 flex justify-center gap-8">
        <div className="p-6 border-black border-[2px] rounded-[1rem]">
          <h3 className="text-3xl text-center font-bold text-[#555555]">
            Frontend Development
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-4">
            <Skill name={"HTML"} level={"basic"} />
            <Skill name={"CSS"} level={"basic"} />
            <Skill name={"Javascript"} level={"basic"} />
            <Skill name={"React"} level={"basic"} />
            <Skill name={"SASS"} level={"basic"} />
            <Skill name={"Tailwind"} level={"basic"} />
            <Skill name={"Ant design"} level={"basic"} />
          </div>
        </div>
        <div className="p-6 border-black border-[2px] rounded-[1rem]">
          <h3 className="text-3xl text-center font-bold text-[#555555]">
            Backend Development
          </h3>
          <div className="mt-3 flex justify-around gap-4">
            <Skill name={"NodeJs"} level={"basic"} />
            <Skill name={"Git"} level={"basic"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
