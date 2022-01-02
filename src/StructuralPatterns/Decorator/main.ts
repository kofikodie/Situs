import FacebookDecorator from "./src/Decorators/FacebookDecorator"
import SmsDecorator from "./src/Decorators/SmsDecorator"
import Notifier from "./src/Notifier"

const baseNotifier = new Notifier()
baseNotifier.send("Hello Basic!")

const smsDecorator = new SmsDecorator(baseNotifier)
smsDecorator.send("Hello SMS!")

const facebookDecorator = new FacebookDecorator(baseNotifier)
facebookDecorator.send("Hello Facebook!")