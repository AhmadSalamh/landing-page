import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Card from "@/components/Card/page";

const Home = () => {
  return (
    <div className="home">
      <div className={`${styles.header} relative`} role="banner">
        <Hero
          src={"/images/Al_reem_island.jpg"}
          title="Home"
          isMouseIcon={true}
          aria-label="Home Page"
        />
      </div>
      <Card role="region" aria-label="Card Section" />
    </div>
  );
};
export default Home;
