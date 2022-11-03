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

    markerContent(): string {
        return `
        <div>
            <h1>Company Name: ${this.name}</h1>
            <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
        `;
    }
}
