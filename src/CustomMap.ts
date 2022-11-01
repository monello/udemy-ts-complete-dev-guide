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
    marker: google.maps.Marker;

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

        // The marker, positioned at Uluru
        this.marker = new google.maps.Marker({
            position: startPosition,
            map: this.map,
        });
    }
}

