import Hero from "@/components/Hero/Hero";

export const metadata = {
  title: "e-commerce-about",
};
const About = () => {
  return (
    <div className="">
      <Hero title={"About Our Building"} src={"/images/Al_reem_island.jpg"} />
      <div className="container">
        <p className="mb-10 text-center text-indigo-600 text-xl md:text-2xl xl:text-4xl font-bold mt-5">
          Welcome to our state-of-the-art building located in the vibrant city
          of Abu Dhabi on Al Reem Island. We take great pride in offering a
          modern and luxurious living experience that caters to your every need.
        </p>
        <div className="mb-4 ">
          <h2 className="font-semibold text-2xl mb-3">Location: </h2>
          <p className="font-medium text-2xl lg:text-xl md:text-lg sm:text-base">
            Our building is strategically situated in the heart of Al Reem
            Island, one of the most sought-after residential areas in Abu Dhabi.
            With its prime waterfront location, residents can enjoy breathtaking
            views of the Arabian Gulf, while being just minutes away from the
            city's bustling business and entertainment districts.
          </p>
        </div>
      </div>

      <section className="p-5 mb-4" style={{ backgroundColor: "#f9faf7" }}>
        <div className="container">
          <div className=" ">
            <h2 className="font-semibold text-2xl mb-3">Amenities:</h2>
            <p className="font-medium text-2xl lg:text-xl md:text-lg sm:text-base">
              We believe in providing our residents with the finest amenities to
              enhance their lifestyle and ensure maximum comfort. Our building
              offers a wide range of facilities that cater to all age groups and
              interests:
            </p>
            <ul className="list-disc pl-8 py-2 text-lg flex flex-col gap-4">
              <li>Swimming pool with a sun deck</li>
              <li>Fitness center equipped with state-of-the-art equipment</li>
              <li>Landscaped gardens and outdoor seating areas</li>
              <li>Children's play area</li>
              <li>24-hour security and concierge services</li>
              <li>Covered parking for residents and guests</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mb-4 ">
          <h2 className="font-semibold text-2xl mb-3">
            Unique Selling Points:
          </h2>
          <p className="font-medium text-2xl lg:text-xl md:text-lg sm:text-base">
            What sets our building apart from others in the area are the
            following unique selling points:
          </p>
          <ul className="list-disc pl-8 py-2 text-lg flex flex-col gap-4">
            <li>
              Architectural Excellence: Our building showcases a stunning
              contemporary design that blends seamlessly with the surrounding
              environment, creating an iconic landmark in Al Reem Island.
            </li>
            <li>
              Smart Home Technology: Each apartment in our building is equipped
              with the latest smart home technology, allowing residents to
              control various aspects of their living space with ease.
            </li>
            <li>
              High-end Finishes: We have spared no expense in selecting the
              finest materials and finishes for our apartments, ensuring a
              luxurious and sophisticated living experience.
            </li>
            <li>
              Panoramic Views: Our building offers panoramic views of the Abu
              Dhabi skyline and the sparkling waters of the Arabian Gulf,
              providing residents with a breathtaking visual experience.
            </li>
            <li>
              Proximity to Amenities: Located in the heart of Al Reem Island,
              our building is within close proximity to shopping malls,
              restaurants, schools, and other essential amenities, making it a
              convenient choice for residents.
            </li>
          </ul>
        </div>
      </div>

      <section
        className="p-6  mt-10"
        style={{ backgroundColor: "#f9faf7" }}
      >
        <div className="container">
          <p className="font-medium text-2xl lg:text-xl md:text-lg sm:text-base">
            At our building, we are committed to creating a unique living
            environment that exceeds your expectations. Come and experience the
            epitome of luxury and comfort in Abu Dhabi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
