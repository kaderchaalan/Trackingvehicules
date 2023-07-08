import { FunctionComponent } from "react";
import styles from "./ConfigurationRegisterOBUV.module.css";
const ConfigurationRegisterOBUV: FunctionComponent = () => {
  return (
    <div className={styles.configurationRegisterObuV}>
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
      <div className={styles.configurationRegisterObuVChild} />
      <div className={styles.reporting}>Reporting</div>
      <img className={styles.chevronDownIcon} alt="" src="/chevrondown.svg" />
      <div className={styles.configuration}>Configuration</div>
      <div className={styles.logout}>LOGOUT</div>
      <img className={styles.chevronDownIcon1} alt="" src="/chevrondown.svg" />
      <img className={styles.chevronDownIcon2} alt="" src="/chevrondown.svg" />
      <div className={styles.tracking}>Tracking</div>
      <img className={styles.chevronDownIcon3} alt="" src="/chevrondown.svg" />
      <img className={styles.image58Icon} alt="" src="/image-58@2x.png" />
      <div className={styles.addAssetManifest}>Add Asset Manifest</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.update}>Update</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
      <b className={styles.addItem}>{`ADD Item `}</b>
      <div className={styles.december20210940}>12 December 2021 09:40</div>
      <div className={styles.container1}>Container 1</div>
      <div className={styles.manifestDescription}>Manifest Description</div>
      <div className={styles.december20211407}>10 December 2021 14:07</div>
      <div className={styles.warehouse1}>Warehouse 1</div>
      <div className={styles.idle}>IDLE</div>
    </div>
  );
};

export default ConfigurationRegisterOBUV;
