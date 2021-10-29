import Implementation from "../Implementation"
import Abstraction from "./Abstraction"

export default class RefinedAbstraction extends Abstraction {
    constructor(implementatio: Implementation) {
        super(implementatio)
    }

    public operation(): string {
        const result = this.implementation.operationImplementation()
        return `RefinedAbstraction: Base operation with:\n${result}`
    }
}
