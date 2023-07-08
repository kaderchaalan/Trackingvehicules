import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TrackingVehicles from "./pages/TrackingVehicles";
import TrackingAsset from "./pages/TrackingAsset";
import Clipboard1 from "./pages/Clipboard1";
import ConfigurationRegisterOBUV from "./pages/ConfigurationRegisterOBUV";
import ConfigurationRegisterOBUV1 from "./pages/ConfigurationRegisterOBUV1";
import ConfigurationRegisterOBUV2 from "./pages/ConfigurationRegisterOBUV2";
import ConfigurationRegisterOBUV3 from "./pages/ConfigurationRegisterOBUV3";
import ConfigurationUserManagemen from "./pages/ConfigurationUserManagemen";
import MENUSITEMAP from "./pages/MENUSITEMAP";
import ConfigurationOBUDeviceLis from "./pages/ConfigurationOBUDeviceLis";
import ConfigurationOBUDeviceLis1 from "./pages/ConfigurationOBUDeviceLis1";
import ConfigurationUserManagemen1 from "./pages/ConfigurationUserManagemen1";
import ReportingLOGTrackingAsset from "./pages/ReportingLOGTrackingAsset";
import ConfigurationRegisterNewA from "./pages/ConfigurationRegisterNewA";
import ConfigurationRegisterOBUV4 from "./pages/ConfigurationRegisterOBUV4";
import Dashboard from "./pages/Dashboard";
import ReportingLOGTrackingVehic from "./pages/ReportingLOGTrackingVehic";
import ReportingAssetManagement from "./pages/ReportingAssetManagement";
import TrackingVehicles1 from "./pages/TrackingVehicles1";
import ReportingVehiclesManagemen from "./pages/ReportingVehiclesManagemen";
import TrackingAsset1 from "./pages/TrackingAsset1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/tracking-asset":
        title = "";
        metaDescription = "";
        break;
      case "/clipboard":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-register-obu-vehicle":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-register-obu-vehicle1":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-register-obu-vehicle2":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-register-obu-vehicle3":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-user-management":
        title = "";
        metaDescription = "";
        break;
      case "/menu-site-map":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-obu-device-list":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-obu-device-list1":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-user-management1":
        title = "";
        metaDescription = "";
        break;
      case "/reporting-log-tracking-asset":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-register-new-asset-device":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-register-obu-vehicle4":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/reporting-log-tracking-vehicles":
        title = "";
        metaDescription = "";
        break;
      case "/reporting-asset-management":
        title = "";
        metaDescription = "";
        break;
      case "/tracking-vehicles":
        title = "";
        metaDescription = "";
        break;
      case "/reporting-vehicles-management":
        title = "";
        metaDescription = "";
        break;
      case "/tracking-asset1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TrackingVehicles />} />
      <Route path="/tracking-asset" element={<TrackingAsset />} />
      <Route path="/clipboard" element={<Clipboard1 />} />
      <Route
        path="/configuration-register-obu-vehicle"
        element={<ConfigurationRegisterOBUV />}
      />
      <Route
        path="/configuration-register-obu-vehicle1"
        element={<ConfigurationRegisterOBUV1 />}
      />
      <Route
        path="/configuration-register-obu-vehicle2"
        element={<ConfigurationRegisterOBUV2 />}
      />
      <Route
        path="/configuration-register-obu-vehicle3"
        element={<ConfigurationRegisterOBUV3 />}
      />
      <Route
        path="/configuration-user-management"
        element={<ConfigurationUserManagemen />}
      />
      <Route path="/menu-site-map" element={<MENUSITEMAP />} />
      <Route
        path="/configuration-obu-device-list"
        element={<ConfigurationOBUDeviceLis />}
      />
      <Route
        path="/configuration-obu-device-list1"
        element={<ConfigurationOBUDeviceLis1 />}
      />
      <Route
        path="/configuration-user-management1"
        element={<ConfigurationUserManagemen1 />}
      />
      <Route
        path="/reporting-log-tracking-asset"
        element={<ReportingLOGTrackingAsset />}
      />
      <Route
        path="/configuration-register-new-asset-device"
        element={<ConfigurationRegisterNewA />}
      />
      <Route
        path="/configuration-register-obu-vehicle4"
        element={<ConfigurationRegisterOBUV4 />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/reporting-log-tracking-vehicles"
        element={<ReportingLOGTrackingVehic />}
      />
      <Route
        path="/reporting-asset-management"
        element={<ReportingAssetManagement />}
      />
      <Route path="/tracking-vehicles" element={<TrackingVehicles1 />} />
      <Route
        path="/reporting-vehicles-management"
        element={<ReportingVehiclesManagemen />}
      />
      <Route path="/tracking-asset1" element={<TrackingAsset1 />} />
    </Routes>
  );
}
export default App;
