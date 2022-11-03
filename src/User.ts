import { faker } from '@faker-js/faker';

import { Location } from './types';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: Location;
    color: 'blue';

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        };
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}
