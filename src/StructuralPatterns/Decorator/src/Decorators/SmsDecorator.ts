import BaseDecorator from "./BaseDecorator"

export default class SmsDecorator extends BaseDecorator {
    send(message: string): void {
        console.log(`Sending SMS message: ${message}`)
    }
}
