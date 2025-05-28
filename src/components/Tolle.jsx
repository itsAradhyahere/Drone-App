import  Tolle2  from "../assets/images/Tolle2.png";
import styles, { layout } from "../styles/style";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
  zoomIn,
  planetVariants,
} from "../utils/motion.js";

const Billing = () => (
  <section
    id="Tolle2"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className={layout.sectionImgReverse}>
      <motion.img
        variants={fadeIn("right", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        src={Tolle2}
        alt="Tolle2"
        className="w-[100%] h-[100%]  z-[5] object-contain sm:pl-0 pl-[500px] "
      />
    </div>
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 1)}
      initial="hidden"
      whileInView="show"
      className="absolute z-[0]"
    >
      <h2 className="font-poppins font-semibold  sm:pl-0 pl-[1200px] md:text-[308px] text-[240px] text-white text-center  w-full md:pt-[270px] pt-[100px] opacity-25 ">
        TOLLE 
      </h2>
    </motion.div>
    {/* bg gradient */}
    <div className="absolute z-[0] w-[100%] h-[30%] -left-[4%] top-[300px] rounded-full   gradient-01 " />
  </section>
);

export default Billing;
