import styles from "./styles/style";
import { Business, Footer, Navbar, Hero, Shop, Desc, Dji} from "./components";
import AIAssistant from "./components/AIAssistant";
import Drone from "./components/Drone"
import Drone2 from "./components/Drone2"
import Tolle from "./components/Tolle"






const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-hero-pattern  bg-cover bg-no-repeat bg-center`}
    >
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Dji />
        <Tolle /> 
        <Drone />
        <Drone2 />
        <AIAssistant />
        <Shop />
        <Business />
        <Desc />
        {/* <Footer /> */}
      </div>
    </div>
  </div>
);

export default App;
