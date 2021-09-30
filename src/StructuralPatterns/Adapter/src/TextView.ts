/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TextViewInterface } from "./Interface/TextViewInterface"
import { Class } from "./Mixins";

export function TextView<Base extends Class>(base: Base) {
    return class extends base implements TextViewInterface {
        public view(): void {
            console.log('view implementation')
        }

        public getOrigin(cordX: number, cordY: number): void {
            console.log('getOrgin implementation', cordX, cordY)
        }

        public getExtent(width: number, height: number): void {
            console.log('getOrgin implementation', width, height)
        }

        public isEmpty(): boolean {
            return false
        }    
    };
  }
