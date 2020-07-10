export class Door {
    private static doorCount = 1
    #doorNumber: number

    constructor(private roomFrom: number, private roomTo: number) {
        this.#doorNumber = Door.doorCount++
        console.log(
            `Creating a Door# ${
                this.#doorNumber
            } between room# ${this.roomFrom.toString()} and room# ${this.roomTo.toString()}`,
        )
    }

    toString(): string {
        return `Door# ${this.#doorNumber}`
    }
}
