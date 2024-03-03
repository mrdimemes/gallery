import { SectionWrapperProps } from "./types";
import styles from "./SectionWrapper.module.sass";


const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <div className={styles.SectionWrapper}>
      {children}
    </div>
  );
}


export default SectionWrapper;
