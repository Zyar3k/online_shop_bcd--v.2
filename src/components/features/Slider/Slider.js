import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import styles from "./Slider.module.scss";

import img1 from "../../../images/caro1.jpg";
import img2 from "../../../images/caro2.jpg";

const Slider = () => {
  return (
    <section className={styles.slider}>
      <Carousel
        showArrows={true}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
        showIndicators={false}
        stopOnHover={true}
        showThumbs={false}
        showStatus={false}
        // thumbWidth={true}
        // renderThumbs={false}
      >
        <div>
          <img className={styles.imgSlider} src={img1} alt='img1' />
          <p className={`${styles.legenda} legend`}>Personalized gifts</p>
        </div>
        <div>
          <img className={styles.imgSlider} src={img2} alt='img2' />
          <p className='legend'>Free UK Shipping</p>
        </div>
        {/* <div>
          <img src='assets/3.jpeg' />
          <p className='legend'>Legend 3</p>
        </div> */}
      </Carousel>
    </section>
  );
};

export default Slider;
