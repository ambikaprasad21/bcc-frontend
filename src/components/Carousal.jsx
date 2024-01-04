import styles from "./Carousal.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousal() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <div className={styles.carousal}>
      <Slider {...settings}>
        <div className={styles["carousel--img-div"]}>
          <img
            src="./../../images/banner-01.jpeg"
            alt="banner"
            className={`${styles["carousel-img"]} ${styles.banner}`}
          />
        </div>
        <div className={styles["carousel--img-div"]}>
          <img
            src="./../../images/carousal-4.jpg"
            alt="carousal-4"
            className={styles["carousel-img"]}
          />
        </div>
        <div className={styles["carousel--img-div"]}>
          <img
            src="./../../images/carousal-6.jpg"
            alt="carousal-6"
            className={styles["carousel-img"]}
          />
        </div>
        <div className={styles["carousel--img-div"]}>
          <img
            src="./../../images/carousal-7.jpg"
            alt="carousal-7"
            className={styles["carousel-img"]}
          />
        </div>
        <div className={styles["carousel--img-div"]}>
          <img
            src="./../../images/carousal-5.jpg"
            alt="carousal-5"
            className={styles["carousel-img"]}
          />
        </div>
        <div className={styles["carousel--img-div"]}>
          <img
            src="./../../images/carousal-2.jpg"
            alt="carousal-2"
            className={styles["carousel-img"]}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousal;
