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
      <main className={styles.notFound}>
        <div>
          <p>
            We looked everywhere for this page.
            <br />
            Are you sure the website URL is correct?
            <br />
            Get in touch with the site owner.
          </p>
          <br />
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
