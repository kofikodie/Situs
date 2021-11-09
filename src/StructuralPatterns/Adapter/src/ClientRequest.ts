import Target from "./Target";

export default function clientCode(target: Target) {
    console.log(target.request());
}