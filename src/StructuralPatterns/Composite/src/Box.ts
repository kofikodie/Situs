import Order from "./Order"

/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
export default class Box extends Order {
    protected children: Order[] = []

    /**
     * A composite object can add or remove other components (both simple or
     * complex) to or from its child list.
     */
    public add(order: Order): void {
        this.children.push(order)
        order.setParent(this)
    }

    public remove(order: Order): void {
        console.log("sono qui: ", order)
        const orderIndex = this.children.indexOf(order)
        console.log("sono qui: ", orderIndex)
        this.children.splice(orderIndex, 1)
    }

    public isComposite(): boolean {
        return true
    }

    /**
     * The Composite executes its primary logic in a particular way. It
     * traverses recursively through all its children, collecting and summing
     * their results. Since the composite's children pass these calls to their
     * children and so forth, the whole object tree is traversed as a result.
     */
    public prize(): number {
        const results = []
        for (const child of this.children) {
            results.push(child.prize())
        }

        return results.reduce((partialSum, a) => partialSum + a, 0)
    }
}
