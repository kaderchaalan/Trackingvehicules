import { FunctionComponent } from "react";
import styles from "./Clipboard1.module.css";
const Clipboard1: FunctionComponent = () => {
  return (
    <div className={styles.clipboard}>
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      <img className={styles.clipboardChild} alt="" src="/vector-2.svg" />
      <img className={styles.clipboardItem} alt="" src="/vector-3.svg" />
      <img className={styles.clipboardInner} alt="" src="/vector-4.svg" />
    </div>
  );
};

export default Clipboard1;
