import styles from "./ThirdBlock.module.css";
import MapContainer from "../../components/MapContainer";

const ThirdBlock = () => {
  return (
    <div id="ActivityAroundTheWorld" className={styles.main}>
      <div className={styles.text}>
        <h3>Activity around the world</h3>
      </div>
      <div className={styles.map}>
        <MapContainer lat={40} lng={-90} />
      </div>
    </div>
  );
};

export default ThirdBlock;
