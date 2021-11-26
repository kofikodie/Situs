import Box from "./Box"

export default class Product extends Box {
    public prize(): number {
        const productCost = 900
        console.log('iphone prize is: ', productCost)

        return productCost
    }
}