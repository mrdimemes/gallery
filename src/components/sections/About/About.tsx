
import classNames from "classnames";
import styles from "./About.module.sass";


const About = () => {
  return (
    <section className={styles.About}>

      <div className={classNames(styles.column, styles.info)}>
        <h1>О нас</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum, enim laudantium consectetur sunt, neque est, quidem modi labore nisi ab? Dolorum, tenetur autem molestiae officia eos facilis itaque corrupti quisquam, rem mollitia inventore dolore nam explicabo amet quis cumque architecto dolores ab! Quisquam temporibus asperiores numquam voluptatibus. Error quam consectetur aliquam pariatur voluptate, inventore reiciendis, praesentium quo esse tempore debitis, animi beatae accusantium! Corrupti eum praesentium accusamus sunt voluptatum quia ab qui provident odio consequuntur quaerat beatae expedita odit, placeat repellat veritatis perferendis omnis sit et nisi iure? Dolorem, explicabo. In tempora nobis excepturi voluptatem? Error cumque possimus illum.</p>
      </div>

      <div className={classNames(styles.column, styles.imageContainer)}></div>

    </section>
  );
}


export default About;
