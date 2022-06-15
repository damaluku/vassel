import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled, { css } from "styled-components";
import {
  IoLogoGameControllerB,
  FcCdLogo,
  DiJqueryLogo,
  GiPentarrowsTornado,
  BsFillEmojiSunglassesFill,
  GiEyeball,
  GiHunterEyes,
  IoLogoYoutube,
  IoLogoXing,
  IoLogoXbox,
  premium,
  features,
  compareStyles,
  IoMdArrowDroprightCircle,
} from "../assets/slides";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>vassel</title>
      </Head>
      <main>
        <section className={styles.videoContainer}>
          <video autoPlay muted playsInline loop>
            <source src="/bagvid2.mp4" />
            <source src="/bagvid1.mp4" />
          </video>
          <div className={styles.title}>
            <h1>prime-x</h1>
          </div>
        </section>
        <section className={styles.herosection}>
          <div className={styles.intro}>
            <p data-aos="fade-up">
              Meticulously crafted with modern materials in stealth mode &
              innovative features for maximum utility.
            </p>
          </div>
          <div className={styles.carousel}>
            <div className={styles.slider} data-aos="fade-right">
              <div className={styles.slide}>
                <IoLogoGameControllerB />
                <FcCdLogo />
                <DiJqueryLogo />
                <GiPentarrowsTornado />
                <BsFillEmojiSunglassesFill />
                <GiEyeball />
                <GiHunterEyes />
                <IoLogoYoutube />
                <IoLogoXing />
                <IoLogoXbox />
              </div>
              <br />
              <div className={styles.slide}>
                <IoLogoGameControllerB />
                <FcCdLogo />
                <DiJqueryLogo />
                <GiPentarrowsTornado />
                <BsFillEmojiSunglassesFill />
                <GiEyeball />
                <GiHunterEyes />
                <IoLogoYoutube />
                <IoLogoXing />
                <IoLogoXbox />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.products}>
          <div className={styles.productDescription} data-aos="fade-up">
            <h2>BUILT TO PERFORM</h2>
            <p>
              The PrimeX Backpack is a versatile, utility bag perfect for work,
              travel, outdoor adventures and everything in between. This
              backpack offers plenty of storage, including dedicated tech
              compartments for your laptop, phone, tablets and more.
            </p>
          </div>

          <div className={styles.morebagImg}>
            <div className={styles.bag1} data-aos="fade-right">
              <Image
                src="/bag1.webp"
                alt="bag"
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
            <div className={styles.bagModel} data-aos="fade-right">
              <Image
                src="/bag2.webp"
                alt="bag"
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.discriptionVid}>
            <div className={styles.descript}>
              <p data-aos="fade-up">
                The first of its kind in our lineup, the PrimeX features a
                Snap-Closure Magnetic Accessory Pocket with a hook lock for
                added security.
              </p>
            </div>
            <div className={styles.descriptVid}>
              <video autoPlay muted playsInline loop>
                <source src="/bagvid3.mp4" />
                <source src="/bagvid4.mp4" />
              </video>
            </div>
          </div>
        </section>
        <section className={styles.premiumMaterials}>
          <div className={styles.premium}>
            <div className={styles.prem} data-aos="fade-up">
              <h2>PREMIUM MATERIALS</h2>
              <p>
                Crafted from technically superior materials for performance in
                stealth mode. The PrimeX is lightweight, weather-resistant &
                extremely durable.
              </p>
            </div>
            <div className={styles.premiumProducts}>
              {premium.map((prem) => {
                return (
                  <>
                    <div key={prem.id.toString()} data-aos="fade-right">
                      <Image
                        src={prem.image}
                        alt={prem.name}
                        width={prem.width}
                        height={prem.height}
                      />
                      <h2>{prem.name}</h2>
                      <h4>{prem.description}</h4>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className={styles.advertVid}>
            <video autoPlay muted playsInline loop>
              <source src="/bagvid4.mp4" />
              <source src="/bagvid1.mp4" />
            </video>
          </div>
        </section>

        <section className={styles.performanceFeatures}>
          <div className={styles.performance} data-aos="fade-up">
            <h2>Performance Features</h2>
            <p>
              Modern materials meet maximum utility in the PrimeX. Every feature
              was thoughtfully designed for the modern explorer.
            </p>
          </div>

          <div className={styles.featureList}>
            <ul>
              {features.map((feature) => {
                return (
                  <>
                    <li key={feature.id.toString()} data-aos="fade-right">
                      <div>
                        <Image
                          src={feature.image}
                          alt={feature.name}
                          layout="fill"
                          loading="lazy"
                        />
                      </div>
                      <h2>{feature.name}</h2>
                      <p>{feature.description}</p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </section>
        <section className={styles.compareStyles}>
          <h2 data-aos="fade-up">COMPARE STYLES</h2>
          <div className={styles.compareBag}>
            {compareStyles.map((style) => {
              return (
                <>
                  <div key={style.id.toString()} data-aos="fade-right">
                    <Image
                      src={style.image}
                      alt={style.name}
                      width="150px"
                      height="200px"
                      loading="lazy"
                    />
                    <h4>{style.name}</h4>
                    <p>{style.description}</p>
                    <h4>{style.cost}</h4>
                    <a>shop now</a>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section className={styles.sizeList}>
          <ul>
            <li data-aos="fade-up">
              <div className={styles.featureItem}>SIZE</div>
              <div>12.25”W x 7.5”D x 19”H</div>
              <div>13.5”W x 7.5”D x 22”H</div>
            </li>
            <li data-aos="fade-up">
              <div className={styles.featureItem}>CAPACITY</div>
              <div>28L</div>
              <div>36L</div>
            </li>
            <li data-aos="fade-up">
              <div className={styles.featureItem}>LAPTOP SLEEVE</div>
              <div>Fits up to a 15” Macbook Pro</div>
              <div>Fits up to a 16” Macbook Pro</div>
            </li>
            <li data-aos="fade-up">
              <div className={styles.featureItem}>TRAVEL FEATURES</div>
              <div>Trolley Sleeve</div>
              <div>Trolley Sleeve + Expandable Storage Pouch</div>
            </li>
            <li data-aos="fade-up">
              <div className={styles.featureItem}>EXTERIOR STORAGE</div>
              <div>Dual Water Bottle Sleeves</div>
              <div>
                Dual Water Bottle Sleeves + Dual Straps For Extra Storage
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.signupSection}>
          <div className={styles.formBox}>
            <form className={styles.signUp} data-aos="fade-up">
              <h2>SIGN UP FOR EARLY ACCESS</h2>
              <div>
                <input
                  type="email"
                  maxLength="256"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
                <button type="submit" className={styles.sendIcon}>
                  <IoMdArrowDroprightCircle />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
