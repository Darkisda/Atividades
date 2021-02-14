/* eslint-disable @typescript-eslint/no-empty-function */
import { Tend } from './Tend';

export class Market {
    private tends: Array<Tend> = [];
    constructor() {}

    addTend(tend: Tend): void {
        const exists = this.tends.find((tend) => tend);
        if (exists) {
            return;
        }
        this.tends.push(tend);
    }

    show(): string {
        return JSON.stringify(this.tends);
    }
}
