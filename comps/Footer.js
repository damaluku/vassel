import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <h2>Elevate Your Carry</h2>
          </div>
          <div className={styles.storeLinks}>
            <ul>
              <li>
                <Link href="/">
                  <a>home</a>
                </Link>
              </li>
              <li>
                <Link href="/shoes">
                  <a>shoes</a>
                </Link>
              </li>
              <li>
                <Link href="/tennis">
                  <a>tennis</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.pageLinks}>
            <ul>
              <li>
                <Link href="/about">
                  <a>about</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h4>follow us</h4>
            <div className={styles.socialLinks}>
              <div className={styles.icon}>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImFacebook />
                </a>
              </div>
              <div className={styles.icon}>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </div>
              <div className={styles.icon}>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <BsTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2022 VASSEL, All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
