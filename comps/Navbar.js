import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { IoLogoBuffer } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <a href="#">
            <IoLogoBuffer />
          </a>
          <a
            href="#"
            onClick={() => {
              setToggle(true);
            }}
          >
            Vessel
          </a>
        </div>

        {toggle && (
          <div className={styles.menu}>
            <ul>
              <li className={styles.item}>
                <Link href="/">
                  <a
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    home
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/about">
                  <a
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    about
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/shopShoes">
                  <a
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    shopShoes
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/shopTennis">
                  <a
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    shopTennis
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/contact">
                  <a
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    contact
                  </a>
                </Link>
              </li>
            </ul>
            <AiOutlineClose
              style={{ fontSize: "40px" }}
              className={styles.close}
              onClick={() => {
                setToggle(false);
              }}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
