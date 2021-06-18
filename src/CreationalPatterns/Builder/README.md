## Builder

Separate the construction of a complex object from its representation so that the same contruction process can create different representations.

### Applicability

    Use this pattern when:

-   the algorithm for creating a complex object should be independent of the parts that make up the object and how they're assembled
-   the construction process must allow different rappresentations for the object that's constructed

### Participants

-   _Builder_

    -   specifies an abstract or an interface for creating parts of a "Product" object.

-   _ConcreteBuilder_

    -   constructs and assemblies parts of the "Product" by implementing the builder interface.
    -   defines and keeps track of the representation it creates.
    -   provides an interface for retrieving the product.

-   _Director_

    -   constructs an object using the Builder interface.

-   _Product_

    -   rapresents the complex object under construction. "ConcreteBuilder" builds the product internal representation and defines the process by which it's assembled.
    -   includes classes that define the constituent parts, including interfaces for assembling the parts into the final result.

### Colaborations

-   the clients creates the Director object and configures it with the desired Builder object.
-   Director notifies the builder whenever a part of the product should be built.
-   Builder handles request from the director and adds parts to the product.
-   the client retrieves the product from the builder.
