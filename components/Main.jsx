import React from "react";
import { BsMusicNoteList } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

const mediaSymbol = <BsMusicNoteList style={{ color: "white" }} />;

const Main = () => {
  return (
    <div className="w-full h-screen text-center bg-gradient-to-r from-[black] via-blue-500/40  to-[black]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="flex justify-center mb-3 animate-fadeIn">
            <img alt="Lynx Logo" src="assets/logo/LynxLogo.svg" />
          </div>
          <p className=" inline text-[1.75rem] font-light tracking-widest text-white uppercase animate-fadeIn">
            Welcome to <span className="font-bold animate-colorSwitch">Lynx</span>
          </p>
          <div className="flex justify-center text-[2rem] p-[1rem]">
            {/* <div className="absolute animate-spin">
              <ImSpinner2 />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
