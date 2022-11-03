import { faker } from "@faker-js/faker";

import { Location } from "./types";

export class Company {
    name: string;
    catchPhrase: string;
    location: Location;

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        };
    }
}
