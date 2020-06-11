## Factory Method

Define an interface for creating an object, but lets subclasses decide which class to instantiate. Facotory Method lets a class defer instantiation to subclasses

### Applicability

    Use this pattern when:

-   a class can't anticipate the class of objects it must create
-   a class wants its subclasses to specify the objects its creates.
-   classes delegate responsabilty to one of several helper, and you want to localize the knowledge of which helper subclass is the delegate

### Participants

-   _Product_

    -   defines the interface of objects the factory method creates

-   _ConcreteProduct_

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
