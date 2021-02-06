import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css"
import {run} from "./tutorials/getting_started_tutorials/builder_flight_tracker"

// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = '/';

run();
