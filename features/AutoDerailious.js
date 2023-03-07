import { privateMessage } from "../utils";

register("chat", () => {
    privateMessage("Derailious", "Derailious");
}).setCriteria("Friend > Derailious joined.");


register("chat", () => {
    privateMessage("FelpsLipe", "AutoFelpsLipe");
}).setCriteria("Friend > FelpsLipe joined.");

register("chat", () => {
    privateMessage("nightmarioso", "AutoNightmarioso");
}).setCriteria("Friend > nightmarioso joined.");

register("chat", () => {
    privateMessage("LeaoMartelo", "Desbamid!");
}).setCriteria("Friend > LeaoMartelo joined.");