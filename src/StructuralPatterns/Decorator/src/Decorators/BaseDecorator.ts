import NotifierInterface from "../NotifierInterface"

export default class BaseDecorator implements NotifierInterface {
    private notifier: NotifierInterface

    constructor(notifier: NotifierInterface) {
        this.notifier = notifier
    }

    send(message: string): void {
        this.notifier.send(message)
    }
}
