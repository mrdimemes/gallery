import { ReserveButton } from "components/ReserveButton";
import { CAFE_NAME } from "constants/cafe";

import styles from "./Intro.module.sass";


const Intro = () => {
  return (
    <section className={styles.Intro}>
      <div className={styles.label}>{CAFE_NAME}</div>
      <ReserveButton />
    </section>
  );
};


export default Intro;
