import { ShapeInterface } from "./Interface/ShapeInterface";
import { Class } from "./Mixins";

export function Shape<Base extends Class>(base: Base) {
    return class extends base implements ShapeInterface {
        public boundingBox(bottomLeft: unknown, topRight: unknown): void {
            console.log('will implement', bottomLeft, topRight)
        }
        
        public createManipulator(): void {
            console.log('create a manipulator object, which knows how to manipulate a shape when the user manipulates it')
        }    
    };
  }
