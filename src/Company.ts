import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
import { Location } from "./types";

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: Location;
    color: 'red';

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
