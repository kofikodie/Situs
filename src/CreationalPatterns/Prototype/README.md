## Prototype

Specify the kinds of objects to create using a prototypical instance, and create new objects by copying the prototype

### Applicability

    Use this pattern when:

-   when the classes to instantiate are specified at run-time, for example, by dynamic loading; or
-   to avoid building a class hierarchy of factories that parrallels the class hierarchy of products; or
-   when instances of a class can have one of only a few different combinations of state. It may be more convenient to install a corresponding number of prototypes and clone them rather than instantiating the class manually, each time with the appropriate state.

### Participants

-   _Prototype_

    -   declares an interface for cloning itself.

-   _ConcretePrototype_

    -   implments an operation for cloning itself.

-   _Client_

    -   A client asks a prototype to clone itself.

### Collaborations

-  A client asks a prototype to clone itself.

