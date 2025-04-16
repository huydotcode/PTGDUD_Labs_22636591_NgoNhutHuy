import React from "react";
import { NavLink } from "react-router";
import { navLinks } from "../../constants/navlink";
import { cn } from "../../utils/tailwind";

const Sidebar = () => {
  return (
    <div className="w-[350px] bg-primary p-4 border border-gray-200 h-screen">
      <div>
        <h1 className="text-3xl font-bold">LOGO</h1>
      </div>

      <div className="mt-4">
        <ul className="flex flex-col gap-2">
          {navLinks.map((nav) => {
            return (
              <NavLink
                key={nav.name}
                className={({ isActive, isPending }) =>
                  cn(
                    "gap-2 flex items-center p-2 rounded-md font-medium hover:opacity-70",
                    isActive
                      ? "text-white bg-secondary"
                      : isPending
                        ? "pending"
                        : ""
                  )
                }
                to={nav.path}
              >
                {nav.icon()}
                {nav.name}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
