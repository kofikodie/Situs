import Abstraction from "./src/Abstraction/Abstraction"
import ExtendedAbstraction from "./src/Abstraction/ExtendedAbstraction"
import RefinedAbstraction from "./src/Abstraction/RefinedAbstraction"
import ConcreteImplementationA from "./src/Implementation/ConcreteImplementationA"
import ConcreteImplementationB from "./src/Implementation/ConcreteImplementationB"

function clientCode(abstraction: Abstraction) {
    console.log(abstraction.operation())
}

let implementation = new ConcreteImplementationA()
let abstraction = new Abstraction(implementation)
clientCode(abstraction)

console.log('')

implementation = new ConcreteImplementationB()
abstraction = new ExtendedAbstraction(implementation)
clientCode(abstraction)

console.log('')

implementation = new ConcreteImplementationA
abstraction = new RefinedAbstraction(implementation)
clientCode(abstraction)