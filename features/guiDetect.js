import { imchadaMessage } from "../utils";

let correctGui = false;
const jerry = "Jerry";


register ("tick", (ticks) => {
    if(correctGui) {
        imchadaMessage("gui certa")
        let jerrySlot = Player.getContainer()?.getItems()?.findIndex(item => item && item.getName()?.includes("Jerry"))
        imchadaMessage(jerrySlot)
        Player.getContainer().click(jerrySlot, false, "LEFT")
        Client.currentGui.close()
        correctGui = false;
    }
    if(Player.getContainer().getName() === "Pets") {
        imchadaMessage("oi")
        correctGui = true;
    }
})