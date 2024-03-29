import Link from "next/link";
import React from "react";
import style from "./navbar.module.css"
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Admit Card",
    url: "/admitCard",
  },
  {
    id: 3,
    title: "Govt Job",
    url: "/govtJobs",
  },
  {
    id: 4,
    title: "Results",
    url: "/result",
  },
  {
    id: 5,
    title: "Contact Us",
    url: "/contactUs",
  },
  {
    id: 5,
    title: "Answer Key",
    url: "/answerKey",
  },
  {
    id: 5,
    title: "Admissions",
    url: "/admission",
  },
  {
    id: 5,
    title: "Syllabus",
    url: "/syllabus",
  },
  
];
const Navbar = () => {
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>ResultOnline</Link>
      <div className={style.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={style.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
