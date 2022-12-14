import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "About",
    path: "/student_details",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Subjects",
    path: "/subject_list",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
//   {
//     title: "Team",
//     path: "/team",
//     icon: <IoIcons.IoMdPeople />,
//     cName: "nav-text",
//   },
//   {
//     title: "Messages",
//     path: "/messages",
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: "nav-text",
//   },
  {
    title: "Logout",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
