import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SliderCardProps } from "../types";

import styles from "./SliderCard.module.sass";


const SliderCard = ({ id, image, name, compound }: SliderCardProps) => {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();
  return (
    <div
      className={styles.SliderCard}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.imageContainer}>
        {
          hover &&
          <img className={styles.preview} src="bb.gif" alt="" />
        }
        {
          !hover &&
          <img className={styles.preview} src={`staticPreviews/${image}`} />
        }
      </div>
      <div className={styles.description}>
        <div>{name}</div>
        <div>{compound}</div>
      </div>
      <button
        className={styles.expandButton}
        onClick={() => navigate("/gallery/preview/" + id)}
      >
        Рассмотреть!
      </button>
    </div>
  );
};


export default SliderCard;
