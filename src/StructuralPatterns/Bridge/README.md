## Bridge (also known as Handle or Body)
Decouple an abstraction from its implementation so that the two can vary independently.

### Applicability

    Use this pattern when:

  - you want to avoid a permmanent binding between an abstraction and its implmentation. This might be the case for example, the implementation must be selected or switched at runtime.

  - both the abstraction and their implementation should be extensibile by subclassing. In thus case, Bridge pattern lets you combine the different abstractions and implementations and extend them independently

   - changes in the implementation of an abstraction should not have to be recompiled.

   -  You want to hide the implementation of an abstraction completely from clients. In some programming language the  th e representation of a class is visible in the clas s interface.
   
   - you want to share ani mplementation among multiple objects(perhapsusing reference counting), and this fact should be hidden from the client.

  ### Participants
  - _Abstraction_ 
    
    - defines the abstraction's interface.
    - maintains a reference to an object of type Implementor
 
  - _RefmedAbstraction_ 
    
    - Extends the interface defined by Abstraction.

  - _Implementor_  
    
    - defines the interface for implementation classes. This interface doesn't have to correspond exactly to Abstraction's interface; in fact the two inter- faces can be quite different. Typically the Implementor interface provides only primitive operations, and Abstraction defines higher-level operations based on these primitives.
  
  - _Concretelmplementor_
    
    -implements the Implementor interface and defines its concrete implementation. 

   ### Colaborations

- Abstraction forwards client requests to its Implementor object.
