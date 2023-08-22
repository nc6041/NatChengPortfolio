import { useState } from "react";

import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [title, setTitle] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

      <a href={"/"}>
        <div className={`cursor-pointer object-contain`}
            onMouseEnter={() => setTitle(true)}
            onMouseLeave={() => setTitle(false)}
            >
          <h1 className={`flex whitespace-pre font-nohemi font-bold ss:text-[32px] text-[52px] text-dimBlack  ${
              title ? "text-dimCyan" : "text-dimBlack"
            }`}>
            nat{" "}
            <span className={`${title ? "text-dimBlack" : "text-dimCyan"}`}>cheng</span>
          </h1>
          <p className={`flex whitespace-pre font-nohemi font-normal ss:text-[15px] text-[24px] text-dimBlack  ${
              title ? "text-dimBlack" : "text-dimCyan"
            }`}>
            UX{" "}
            <span className={`${title ? "text-dimCyan" : "text-dimBlack"}`}>designer</span>
          </p>
        </div>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-nohemi font-normal cursor-pointer text-[16px] ${
              active === nav.title || window.location.pathname.substring(1) === nav.id ? "text-dimCyan" : "text-dimBlack"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onMouseEnter={() => setActive(nav.title)}
            onMouseLeave={() => setActive("")}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg border border-dimBlack`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-nohemi font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-dimCyan" : "text-dimBlack"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onMouseEnter={() => setActive(nav.title)}
                onMouseLeave={() => setActive("")}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
