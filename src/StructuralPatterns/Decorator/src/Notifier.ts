import NotifierInterface from "./NotifierInterface";

export default class Notifier implements NotifierInterface{
    send(message: string): void {
        console.log(`Sending base message: ${message}`)
    }
}
