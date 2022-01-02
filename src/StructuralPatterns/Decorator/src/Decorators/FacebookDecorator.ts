import BaseDecorator from "./BaseDecorator"

export default class FacebookDecorator extends BaseDecorator {
    send(message: string): void {
        console.log(`Sending Facebook message: ${message}`)
    }
}
