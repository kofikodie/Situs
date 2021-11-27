import Order from "./Order";

export default class Shipping extends Order {
    public prize(): number {
        const shippingCost = 12
        console.log('The shipping cost is: ', shippingCost)

        return shippingCost
    }
}
