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
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        // If there are no handlers at all yet or
        // no events registered for this eventName, we return nothing to exit
        if (!handlers || handlers.length === 0) {
            return;
        }

        // loop through all the callbacks registered for the given eventName
        // and call them each in turn
        handlers.forEach(callback => callback());
    }
}
