import { User } from "./User";
import { Company } from "./Company";

import { CustomMap } from "./CustomMap";

// Initialize and add the map
function initMap(): void {
    const map = new CustomMap({
        targetId: 'map',
        zoomLevel: 1
    });

    const user = new User();
    map.addMarker(user);

    const company = new Company();
    map.addMarker(company);
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;

export { };
