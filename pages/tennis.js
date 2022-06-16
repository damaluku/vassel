import React, { useEffect } from "react";
import styles from "../styles/Shoptennis.module.css";
import Image from "next/image";
import { tennis } from "../assets/slides";
import AOS from "aos";
import "aos/dist/aos.css";

const Tennis = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <main>
        <section className={styles.hero}>
          <div>
            <video autoPlay muted playsInline loop>
              <source src="/bagvid4.mp4" />
              <source src="/bagvid3.mp4" />
            </video>
            <h1>Built for the Court</h1>
          </div>
        </section>
        <section className={styles.bagSection}>
          <div className={styles.bags} data-aos="fade-right">
            {tennis.map((item) => {
              return (
                <>
                  <div key={item.id.toString()}>
                    <Image src={item.image} alt={item.name} layout="fill" />
                    <h3>{item.name}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section className={styles.expSection}>
          <div className={styles.exp}>
            <p data-aos="fade-up">
              We’re taking luxury performance from the golf course to the tennis
              court. Relentless in our drive to craft luxury products for
              athletes, our Baseline Collection is designed to set a new
              standard in luxury performance tennis accessories.
            </p>
          </div>
          <div className={styles.expHeader}>
            <h3 data-aos="fade-up">
              A New Standard in Luxury <br /> Performance
            </h3>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tennis;
