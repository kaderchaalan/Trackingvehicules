import { FunctionComponent } from "react";
import styles from "./ConfigurationOBUDeviceLis.module.css";
const ConfigurationOBUDeviceLis: FunctionComponent = () => {
  return (
    <div className={styles.configurationObuDeviceLis}>
      <div className={styles.statusBar}>
        <img className={styles.statusBarBg} alt="" src="/status-bar-bg.svg" />
        <div className={styles.notification}>Notification</div>
        <img className={styles.statusBarContents} alt="" />
        <div className={styles.adminxenxorcom}>admin@xenxor.com</div>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>
      <b className={styles.xenxorTrackingSystem}>XENXOR TRACKING SYSTEM</b>
      <div className={styles.dashboard}>Dashboard</div>
      <div className={styles.configurationObuDeviceLisChild} />
      <div className={styles.reporting}>Reporting</div>
      <img className={styles.chevronDownIcon} alt="" src="/chevrondown.svg" />
      <div className={styles.configuration}>Configuration</div>
      <div className={styles.logout}>LOGOUT</div>
      <img className={styles.chevronDownIcon1} alt="" src="/chevrondown.svg" />
      <div className={styles.tracking}>Tracking</div>
      <img className={styles.chevronDownIcon2} alt="" src="/chevrondown.svg" />
      <img className={styles.image58Icon} alt="" src="/image-58@2x.png" />
      <div className={styles.orderDeliveryList}>Order Delivery List</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.orderId}>ORDER ID</div>
        <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
      </div>
      <img
        className={styles.screenShot20211213At153}
        alt=""
        src="/screen-shot-20211213-at-1534-1@2x.png"
      />
    </div>
  );
};

export default ConfigurationOBUDeviceLis;
