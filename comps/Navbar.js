import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { IoLogoBuffer } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <IoLogoBuffer />
          <Link href="/store">
            <a>Vessel</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
