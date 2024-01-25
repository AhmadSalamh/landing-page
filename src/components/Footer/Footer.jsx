import styles from "./footer.module.css";
import { images } from "./data";
function Footer() {
  return (
    <footer className={`flex flex-col md:flex-row items-center justify-between ${styles.container}`}>
      <p>Copyright©Al Reem Island. All rights reserved</p>
      <div className={styles.social}>
        {images.map((image) => (
          <a href="" className=" block" key={image.id}>
            <img
              src={image.src}
              width={28}
              height={28}
              className={styles.icon}
              alt={image.alt}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
