// Instructions to every other class on how thet can be an
// argument to the `addMarker()` method
interface Mappable {
    location: {
        lat: number,
        lng: number;
    };
}

interface CustomMapProps {
    targetId: string;
    zoomLevel?: number;
    startPosition?: {
        lat: number;
        lng: number;
    };
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
        new google.maps.Marker({
            map: this.map,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }
}

