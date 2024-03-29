import React, { useEffect } from "react";
import styles from "../styles/ShopShoes.module.css";
import Image from "next/image";
import { arrivals, shoes } from "../assets/slides";
import AOS from "aos";
import "aos/dist/aos.css";

const Shoes = () => {
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
              <source src="/shoevid1.mp4" />
              <source src="/shoevid3.mp4" />
            </video>
            <h1>Relentless Pursuit</h1>
          </div>
        </section>
        <section className={styles.bagSection}>
          <div className={styles.bags} data-aos="fade-right">
            {shoes.map((bag) => {
              return (
                <>
                  <div key={bag.id.toString()}>
                    <Image src={bag.image} alt={bag.name} layout="fill" />
                    <h3>{bag.name}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section className={styles.expSection}>
          <div className={styles.exp}>
            <p data-aos="fade-up">
              Trusted by hundreds of professionals, we create luxury shoes and
              accessories for everyone who expect the most from their gear.
              Handcrafted from the highest quality of materials, refined details
              and superior functionality, VASSEL brings you the ultimate
              performance luxury.
            </p>
          </div>
          <div className={styles.expHeader}>
            <h3 data-aos="fade-up">
              Experience Tour <br /> Performance
            </h3>
          </div>
        </section>
        <section className={styles.newArrivalSection}>
          <h1 data-aos="fade-up">New Arrivals</h1>
          <div className={styles.arrival}>
            {arrivals.map((arrival) => {
              return (
                <>
                  <div
                    className={styles.arrivalContainer}
                    key={arrival.id.toString()}
                  >
                    <div className={styles.imgdiv} data-aos="fade-right">
                      <Image
                        src={arrival.image}
                        alt={arrival.name}
                        layout="fill"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.description}>
                      <h2 data-aos="fade-up">{arrival.name}</h2>
                      <p data-aos="fade-up">{arrival.description}</p>
                      <button data-aos="fade-up">shop now</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Shoes;
