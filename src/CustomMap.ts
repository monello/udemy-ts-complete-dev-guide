import { User } from './User';
import { Company } from './Company';
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

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.map,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        });
    }

    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.map,
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            }
        });
    }
}

