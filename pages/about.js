import React, { useEffect } from "react";
import styles from "../styles/About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <main>
        <section className={styles.hero}>
          <div>
            <h2 data-aos="fade-up">
              We create luxury goods, <br />
              crafted for the driven.
            </h2>
            <p data-aos="fade-up">
              To unleash the potential of the purpose-driven through luxury
              performance goods.
            </p>
          </div>
        </section>
        <section className={styles.mission}>
          <div>
            <h2 data-aos="fade-up">Our Mission</h2>
            <p data-aos="fade-up">
              To unleash the potential of the purpose-driven through luxury
              performance goods.
            </p>
          </div>
        </section>
        <section className={styles.vision}>
          <div>
            <h2 data-aos="fade-up">Tour Proven</h2>
            <p data-aos="fade-up">
              Our rapid, organic growth can be attributed to the quality of our
              golf collection, and has become the choice of carry for hundreds
              of professionals and athletes around the world. These driven
              athletes are our first line of product feedback.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
