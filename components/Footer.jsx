import Link from "next/link";
import React from "react";

const Footer = (props) => {
  return (
    <div className={props.className}>
      <div className="fixed bottom-0 w-full animate-fadeInNoScale">
        <footer className="bg-[transparent] flex justify-center py-[.5rem]">
              <p className="text-base text-center text-gray-100 ">
                &copy; 2023 KRYPTO MX &trade;
              </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
