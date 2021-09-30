import { Shape } from "./Shape";
import { TextView } from "./TextView";

export class TextShape extends Shape(TextView(class {})) {
    constructor() {
      super();
    }

    public boundingBox(bottomLeft: number, topRight: number): void {
        this.getOrigin(bottomLeft, topRight)
        this.getExtent(21, 190)
    }
  }
  