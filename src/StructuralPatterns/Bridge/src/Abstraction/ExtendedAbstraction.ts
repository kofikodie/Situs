import Implementation from "../Implementation"
import Abstraction from "./Abstraction"

export default class ExtendedAbstraction extends Abstraction {
    constructor(implementation: Implementation) {
        super(implementation)
    }
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with:\n${result}`
    }
}