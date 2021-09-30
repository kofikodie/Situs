export interface TextViewInterface {
    view(): any
    getOrigin(cordX: any, cordY: any): any
    getExtent(width: any, height: any): any
    isEmpty(): boolean
}