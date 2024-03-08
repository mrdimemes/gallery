import { SliderCardProps } from "../types";

import styles from "./SliderCard.module.sass";


const SliderCard = ({ image, name, compound }: SliderCardProps) => {
  return (
    <div className={styles.SliderCard}>
      <div className={styles.imageContainer}>
        <img className={styles.preview} src={`gallery/staticPreviews/${image}`} />
      </div>
      <div className={styles.description}>
        <div>{name}</div>
        <div>{compound}</div>
      </div>
    </div>
  );
};


export default SliderCard;
