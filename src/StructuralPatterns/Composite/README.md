## Composite
Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

### Applicability

    Use this pattern when:

 - you want to represent part-whole hierarchies of objects.

 - you want clients to be able to ignore the difference between compositions of objects and individual objects. Clients will treat all objects in the composite structure uniformly.

### Participants

 - _Component_ 

    - declares the interface for objects in the composition.
    
    - declares an interface for accessing and managing its child components.
    
    - defines an interface for accessing a component's parent in the recursive structure, and implements it if that's appropriate.

- _Leaf_

    - represents leaf objects in the composition. A leaf has no children.

    - defines behavior for primitive objects in the composition.

- _Composite_

    - defines behavior for components having children.

    - stores child components.

    - implements child-related operations in the Component interface        

- _Client_
    - manipulates objects in the composition through the Component interface.

### Collaborations
 - Clients use the Component class interface to interact with objects in the composite structure. If the recipient is a Leaf, then the request is handled directly. If the recipient is a Composite, then it usually forwards requests to its child components, possibly performing additional operations before and/or after forwarding.