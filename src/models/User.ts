export interface UserProps {
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    // [key: string] is a TypeScript "index signature", we use this when we don't know what
    //   all the property names will be in the future, but we do know they will be strings
    events: { [key: string]: Callback[]; } = {};

    constructor(private data: UserProps) { }

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {

    }
}
