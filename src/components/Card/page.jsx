"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "./data";
import styles from "./card.module.scss";


const Card = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {data.map((item) => (
        <section
          key={item.id}
          id={`section-${item.id}`}
          className={`${styles.card} block object-cover bg-no-repeat bg-center relative md:h-[30rem] lg:h-[37rem]`}
          style={{ backgroundImage: `url(${item.src})` }}
        >
          <div className="overlay"></div>
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="w-full md:w-[40rem] pt-[2rem] pb-[2rem] md:pt-[4rem] md:pb-[4rem] bg-white relative z-10"
          >
            <div className="container">
              <div className={styles.contentItem}>
                <img
                  src={item.src}
                  width={80}
                  height={80}
                  alt={item.title}
                  className="w-full object-cover m-auto md:none"
                ></img>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="900"
                  data-aos-delay="400"
                  className="text-uppercase text-indigo-700 text-2xl mb-3 font-bold"
                >
                  {item.title}
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-duration="900"
                  data-aos-delay="700"
                  className="text-xl text-justify text-gray-500"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Card;
