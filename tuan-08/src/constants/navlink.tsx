import { GoProject } from "react-icons/go";
import { GrAnalytics } from "react-icons/gr";
import { IoIosCode } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

export const navLinks = [
  {
    path: "/",
    name: "Dashboard",
    icon: () => <MdDashboard />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: () => <GoProject />,
  },
  {
    path: "/teams",
    name: "Teams",
    icon: () => <RiTeamLine />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: () => <GrAnalytics />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: () => <LuMessageSquareMore />,
  },
  {
    path: "/intergrations",
    name: "Intergrations",
    icon: () => <IoIosCode />,
  },
];
