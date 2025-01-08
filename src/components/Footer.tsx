import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#2A254B] border-t-2">
      <footer className="">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className=" text-sm text-emerald-500 mb-4 md:mb-0 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-emerald-500 sm:py-2 sm:mt-0 mt-4">
            © 2024 Code Crafted | All Right Reserved
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-2xl">
            <Link
              href="https://github.com/"
              className="ml-5 text-emerald-500 text-xl "
            >
              <FaGithub className="foot-icon  " />
            </Link>

            <Link
              href="https://www.linkedin.com/"
              className="ml-5 text-emerald-500 text-xl"
            >
              <FaLinkedin className="foot-icon" />
            </Link>

            <Link
              href="https://www.facebook.com/"
              className="ml-5 text-emerald-500 text-xl"
            >
              <FaFacebook className="foot-icon" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

  