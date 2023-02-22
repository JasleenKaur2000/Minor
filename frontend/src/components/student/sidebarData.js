import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/student_dash",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/student_details",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Subjects",
    path: "/subject_table",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
