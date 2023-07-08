import { FunctionComponent } from "react";
import styles from "./MENUSITEMAP.module.css";
const MENUSITEMAP: FunctionComponent = () => {
  return (
    <div className={styles.menuSiteMap}>
      <div className={styles.statusBar}>
        <img className={styles.statusBarBg} alt="" src="/status-bar-bg.svg" />
        <div className={styles.notification}>Notification</div>
        <img className={styles.statusBarContents} alt="" />
        <div className={styles.adminxenxorcom}>admin@xenxor.com</div>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>
      <b className={styles.xenxorTrackingSystem}>XENXOR TRACKING SYSTEM</b>
      <div className={styles.dashboard}>DASHBOARD</div>
      <div className={styles.tracking}>TRACKING</div>
      <div className={styles.assetTracking}>Asset Tracking</div>
      <div className={styles.assetTrackingLog}>Asset Tracking LOG</div>
      <div className={styles.vehicleTrackingLog}>Vehicle Tracking LOG</div>
      <div className={styles.vehicleTracking}>Vehicle Tracking</div>
      <div className={styles.reporting}>REPORTING</div>
      <div className={styles.assetDashboard}>Asset Dashboard</div>
      <div className={styles.obuDevice}>{`OBU & Device List`}</div>
      <div className={styles.driverReporting}>Driver Reporting</div>
      <div className={styles.driverAbsence}>Driver Absence</div>
      <div className={styles.vehicleDashboard}>Vehicle Dashboard</div>
      <div className={styles.configuration}>CONFIGURATION</div>
      <div className={styles.deviceAssetRegister}>Device Asset Register</div>
      <div className={styles.userManagement}>User Management</div>
      <div className={styles.driverAccess}>Driver Access</div>
      <div className={styles.obuVehicleRegister}>OBU Vehicle Register</div>
    </div>
  );
};

export default MENUSITEMAP;
