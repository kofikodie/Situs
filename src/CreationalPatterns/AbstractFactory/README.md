## Abstract Factory

Provide an interface for creating families of related or dependent objects without specifying thier concrete classes

### Applicability

    Use this pattern when:

-   a system should be independent of how it's products are created, composed, and represented.
-   a system should be configured with one of multiple families of products.
-   a family of related product objects is designed to be used together, and need to enforce this constraint.
-   you want to provide a class library of products, and you want to reveal just their interface, not their implementations.

### Participants

-   _AbstractFactory_

    -   declares an interface for operations that create abstract product objects.

-   _ConcreteFactory_

    -   implements the opeartions to create concrete product objects.

-   _AbstractProduct_

    -   declares an interface for a type of product object.

-   _ConcreteProduct_

    -   defines a product object to be created by the corresponding concrete factory.
    -   implements the "AbstractProduct" interface.

-   _Client_

    -   uses only interfaces delared by "AbstractFactory" and "AbstractProduct" classes.

### Collaborations

-   Normally a single instance of "ConcreteFacotory" class is created at runtime. This concrete factory creates product objects having a particular implementation. To create different product objects, clients should use a diffrent concrete factory.
-   "AbstractFactory" defers creation of product objects to its "ConcreteFactory" subclass
