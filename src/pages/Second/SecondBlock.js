import styles from "./SecondBlock.module.css";
//Using CSS only
const SecondBlock = () => {
  const images = [
    "/photos/street.jpg",
    "/photos/Roof.jpg",
    "/photos/penguins.jpg",
  ];
  return (
    <div id="SectorsOfActivity" className={styles.main}>
      <div className={styles.text}>
        <h3>Sectors of activity</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
          odio eu enim feugiat lacinia. Nam tristique, ex in mollis elementum,
          dui dui congue nisi, vel consectetur mi libero quis lacus. Phasellus a
          consectetur nunc.
        </p>
      </div>
      <div className={styles.imagesContainer}>
        {images.map((item) => (
          <img key={item} src={item} className={styles.image} />
        ))}
      </div>
    </div>
  );
};
export default SecondBlock;
