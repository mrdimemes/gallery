import { SectionContent } from "components/SectionContent";

import styles from "./Events.module.sass";


const Events = () => {
  return (
    <section>
      <SectionContent className={styles.content}>

        <h1>Мероприятия</h1>

        <div className={styles.grid}>

          <div className={styles.imageContainer}></div>

          <div className={styles.plates}>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
            <div className={styles.plate}></div>
          </div>

          <div className={styles.info}>
            <h2>Описание</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi ratione exercitationem vero, expedita odit quis velit sint dignissimos nobis molestiae provident eius distinctio itaque dolore veritatis enim aliquam odio deleniti hic iste cumque veniam facere quos. Vel itaque assumenda debitis ducimus porro harum nisi omnis corporis blanditiis reiciendis. Nostrum!</p>
          </div>

        </div>

      </SectionContent>
    </section>
  );
};


export default Events;
