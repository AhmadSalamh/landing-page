"use client";
import Hero from "@/components/Hero/Hero";
import MySlider from "@/components/Slider/MySlider";
import {
  imagesOfInteriors,
  imagesOfAmenities,
  imagesOfSurroundings,
} from "@/components/Slider/image";
import styles from "./page.module.scss";
import Image from "next/image";
function Contact() {
  return (
    <section className={styles.gallery}>
      <Hero title={"Gallery"} src={"/images/Al_reem_island.jpg"} />
      <div className="container mt-5">
        <div>
          <div className="mb-10">
            <h2>images of the building</h2>
            <div className="flex gap-4">
              <div>
                <Image
                  src="/images/building-1.jpg"
                  alt="Image of Building 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/building-2.jpg"
                  alt="Image of Building 2"
                  width={500}
                  height={500}
                  className="w-full min-h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h2> Interiors</h2>
            <MySlider images={imagesOfInteriors} />
          </div>
          <div className="mb-10">
            <h2>Amenities</h2>
            <MySlider images={imagesOfAmenities} />
          </div>
          <div className="mb-10">
            <h2>Surroundings</h2>
            <MySlider images={imagesOfSurroundings} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
