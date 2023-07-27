import Link from "next/link";
import React from "react";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <h2>Quicks Links</h2>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/admitCard">
          <p>Admit Card</p>
        </Link>
        <Link href="/admission">
          <p>Admission</p>
        </Link>
        <Link href="/result">
          <p>Result</p>
        </Link>
        <Link href="/contactUs">
          <p>Contact Us</p>
        </Link>
      </div>
      <div>
        <h2>Apps</h2>
        <Link href="/">
          <p>Andriod</p>
        </Link>
        <Link href="/admitCard">
          <p>iOS</p>
        </Link>
      </div>
      <div>
        <h2>Apps</h2>
        <Link href="/">
          <p>Andriod</p>
        </Link>
        <Link href="/admitCard">
          <p>iOS</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
