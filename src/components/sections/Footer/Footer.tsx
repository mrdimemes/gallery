import { SectionContent } from "components/SectionContent";
import { ReserveButton } from "components/ReserveButton";
import { CAFE_NAME } from "constants/cafe";

import styles from "./Footer.module.sass";


const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <SectionContent className={styles.content}>

        <div className={styles.brand}>
          <div>{CAFE_NAME}</div>
          <div>LOGO</div>
        </div>

        <ReserveButton />

      </SectionContent>
    </footer>
  );
}


export default Footer;