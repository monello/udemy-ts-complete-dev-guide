import { Location } from './types';

// Instructions to every other class on how thet can be an
// argument to the `addMarker()` method
interface Mappable {
    location: Location;
}

interface CustomMapProps {
    targetId: string;
    zoomLevel?: number;
    startPosition?: Location;
}
export class CustomMap {
    private map: google.maps.Map;

    constructor({ targetId, zoomLevel, startPosition }: CustomMapProps) {
        // Setting some defaults
        targetId = targetId || 'map';
        zoomLevel = zoomLevel || 1;
        startPosition = startPosition || {
            lat: 0,
            lng: 0
        };
        // The map, centered at startPosition
        this.map = new google.maps.Map(
            document.getElementById(targetId) as HTMLElement,
            {
                zoom: zoomLevel,
                center: startPosition,
            }
        );
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.map,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'Hi there!'
            });

            infoWindow.open(
                this.map,   // reference the Google Maps instance
                marker      // reference this marker
            );
        });
    }
}

