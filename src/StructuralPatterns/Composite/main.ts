import Component from "./src/Component";
import Composite from "./src/Composite";
import Leaf from "./src/Leaf";

/**
 * The client code works with all of the components via the base interface.
 */
 function clientCode(component: Component): void {
    console.log(`RESULT: ${component.operation()}`);
}

/**
 * This way the client code can support the simple leaf components...
 */
const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

/**
 * ...as well as the complex composites.
 */
const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
tree.remove(branch1)
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');