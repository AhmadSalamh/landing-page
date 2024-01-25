import Mouse from "@/elements/Mouse/Mouse";
import styles from "./hero.module.scss";

function Hero({ title, src, isMouseIcon }) {
  return (
    <header
      className="flex items-center relative justify-center min-h-[400px] md:min-h-screen"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay" aria-hidden="true"></div>
      <div className="flex flex-col items-center justify-center gap-2 z-10">
        <h1 className={styles.title}>{title}</h1>
        {isMouseIcon && <Mouse aria-label="Mouse Icon" />}
      </div>
    </header>
  );
}

export default Hero;
