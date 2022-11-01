// import { User } from "./User";
// import { Company } from "./Company";

import { CustomMap } from "./CustomMap";

// Initialize and add the map
function initMap(): void {
    const mm = new CustomMap({
        targetId: 'map',
        zoomLevel: 4,
        startPosition: {
            lat: -25.344,
            lng: 131.031
        }
    });
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;

export { };
