import { FunctionComponent } from "react";
import styles from "./ConfigurationUserManagemen.module.css";
const ConfigurationUserManagemen: FunctionComponent = () => {
  return (
    <div className={styles.configurationUserManagemen}>
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
      <div className={styles.configurationUserManagemenChild} />
      <div className={styles.reporting}>Reporting</div>
      <img className={styles.chevronDownIcon} alt="" src="/chevrondown.svg" />
      <div className={styles.configuration}>Configuration</div>
      <div className={styles.logout}>LOGOUT</div>
      <img className={styles.chevronDownIcon1} alt="" src="/chevrondown.svg" />
      <div className={styles.tracking}>Tracking</div>
      <img className={styles.chevronDownIcon2} alt="" src="/chevrondown.svg" />
      <img className={styles.image58Icon} alt="" src="/image-58@2x.png" />
      <div className={styles.driverVehicleAccess}>Driver Vehicle Access</div>
      <img className={styles.chevronDownIcon3} alt="" src="/chevrondown.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.register}>Register</div>
      </div>
      <div className={styles.configurationUserManagemenItem} />
      <div className={styles.configurationUserManagemenInner} />
      <div className={styles.name}>{`Name               `}</div>
      <div className={styles.addNewDriver}>Add New Driver</div>
      <div className={styles.div}>{`:            `}</div>
      <div className={styles.div1}>{`:            `}</div>
      <div className={styles.div2}>{`:            `}</div>
      <div className={styles.div3}>{`:            `}</div>
      <div className={styles.div4}>{`:            `}</div>
      <div className={styles.div5}>{`:            `}</div>
      <div className={styles.lineDiv} />
      <div className={styles.configurationUserManagemenChild1} />
      <div className={styles.vehicleNumber}>Vehicle Number</div>
      <div className={styles.configurationUserManagemenChild2} />
      <div className={styles.configurationUserManagemenChild3} />
      <div className={styles.userName}>User Name</div>
      <div className={styles.configurationUserManagemenChild4} />
      <div className={styles.password}>Password</div>
      <div className={styles.configurationUserManagemenChild5} />
      <div className={styles.configurationUserManagemenChild6} />
      <div className={styles.unit}>UNIT</div>
      <div className={styles.configurationUserManagemenChild7} />
      <div className={styles.configurationUserManagemenChild8} />
      <div className={styles.configurationUserManagemenChild9} />
      <div className={styles.phoneNumber}>Phone Number</div>
    </div>
  );
};

export default ConfigurationUserManagemen;
