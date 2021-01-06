## Adapter

Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatibile interfaces. (This pattern is also known as Wrapper)

### Applicability

    Use this pattern when:

-   you want to use an existing class, and its interface does not match the one you need.
-   you want to create a reusable class that coorperates with unrelated or unforeseen classes, that is, classes that don't necessarily have compatible interfaces.
-   you need to use several existing subclasses, but it's impratical to adapt their interface by subclassing every one. An object adapter can adapt the interface of its parent     class.

### Participants

-   _Target_

    -   defines the domain-specific interface that Client uses.

-   _Client_

    -   collaborates with objects conforming to the Target interface.

-   _Adaptee_

    -   defines an existing interface that needs adapting.

-   _Adapter_

    -   adapts the interface of Adaptee to the Target interface.


### Collaborations

-   Clients call operations on an Adapter instance. In turn, the adapter calls Adaptee operations that carry out the request.
