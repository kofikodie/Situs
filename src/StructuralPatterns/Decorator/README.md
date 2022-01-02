## Decorator
Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

### Applicability

 - to add responsibilities to individual objects dynamically and transparently, that is, without affecting other objects.
 - for responsibilities that can be withdrawn.
 - when extension by subclassing is impractical. Sometimes a large number of independent extensions are possible and would produce an explosion of subclasses to support every combination. Or a class definition maybe hidden or otherwise unavailable for subclassing

 ### Participants
 - _Component_
    
    - defines the interface for objects that can have responsibilities added to them dynamically.

- _ConcreteComponent_
    
    - defines an object to which additional responsibilities can be attached. 
 
 - _Decorator_
    
    - maintains a reference to a Component object and defines an interface that conforms to Component's interface.

 - _ConcreteDecorator_

   - adds responsibilities to the component.