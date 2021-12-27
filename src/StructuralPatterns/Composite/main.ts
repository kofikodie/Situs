import Box from "./src/Box";
import Order from "./src/Order";
import Product from "./src/Product";
import Shipping from "./src/Shipping";

/**
 * The client code works with all of the components via the base interface.
 */
function clientCode(order: Order): void {
    console.log(`TOTAL PRICE: ${order.prize()}`);
}

/**
 * This way the client code can support a complex composites.
 */
const orderBox = new Box();
const shipping = new Shipping();

const box1 = new Box();
box1.add(new Product());
box1.add(new Product());

const box2 = new Box();
box2.add(new Product());

const box3 = new Box();
box3.add(new Product());

orderBox.add(box1);
orderBox.add(box2);
orderBox.add(box3);
orderBox.remove(box3);
orderBox.add(shipping);

console.log('Client: Now I\'ve got a complete order:');
clientCode(orderBox);
console.log('');
