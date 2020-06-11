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

    -   implements the Product interface

-   _Creator_

    -   declares the factory method, which returns an object of type "Product". Creator may also define a default implementation of the factory method that returns a defualt "ConcreteProduct" object
    -   may call the factory method to create a "Product" object.

-   _ConcreteCreator_

    -   overrides the factory method to return an instance of a "ConcreteProduct".

### Colaborations

-   "Creator" relies on its subclasses to define the factory method so that it returns an instance of the appropriate "ConcreteProduct".
