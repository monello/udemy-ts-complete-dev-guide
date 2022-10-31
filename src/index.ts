// import { User } from "./User";
// import { Company } from "./Company";

// Initialize and add the map
function initMap(): void {
    // The location of Uluru
    // const start_position = { lat: -25.344, lng: 131.031 };
    const start_position = { lat: 0, lng: 0 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        // MRL: The target HTML-Element to load the map UI in
        document.getElementById("map") as HTMLElement,
        {
            zoom: 1,
            center: start_position,
        }
    );

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: start_position,
        map: map,
    });
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;

export { };
