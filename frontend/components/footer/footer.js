import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <a
        href="https://www.linkedin.com/in/cameron-tanjoco-8ba612a3/"
        className="footer-link"
      >
        <AiFillLinkedin size={90} />
      </a>
      <a href="https://github.com/HiThereImCam" className="footer-link">
        <AiFillGithub size={90} />
      </a>
      <a href="https://angel.co/u/cameron-tanjoco" className="footer-link">
        <FaAngellist size={90} />
      </a>
    </footer>
  );
}

export default Footer;
