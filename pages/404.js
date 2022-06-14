import Link from "next/link";
import styles from "../styles/NotFound.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <div className={styles.notFound}>
        <h2>Yeeeee!!!</h2>
        <h3>we no find this your page for our site ohh</h3>
        <p>
          try look for am for another site or click the link below to return to
          the home page.
        </p>
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
