import { faker } from '@faker-js/faker';

import { Location } from './types';
export class User {
    name: string;
    location: Location;

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        };
    }
}
