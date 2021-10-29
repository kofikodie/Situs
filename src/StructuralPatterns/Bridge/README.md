## Bridge (also known as Handle or Body)
Decouple an abstraction from its implementation so that the two can vary independently.

### Applicability

    Use this pattern when:

  - you want to avoid a permmanent binding between an abstraction and its implmentation. This might be the case for example, the implementation must be selected or switched at runtime.

  - both the abstraction and their implementation should be extensibile by subclassing. In thus case, Bridge pattern lets you combine the different abstractions and implementations and extend them independently

   - changes in the implementation of an abstraction should not have to be recompiled.

   -  You want to hide the implementation of an abstraction completely from clients. In some programming language the  th e representation of a class is visible in the clas s interface.
   
   - you want to share ani mplementation among multiple objects(perhapsusing reference counting), and this fact should be hidden from the client.

   ### Colaborations

- Abstraction forwards client requests to its Implementor object.
