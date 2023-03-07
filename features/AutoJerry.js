import { imchadaMessage } from "../utils";

let correctGui = false;
let shouldSwapToJerry = false;

const jerryBind = new KeyBind("Spawn jerry", Keyboard.KEY_NONE, "ImJSchada");

register("command", () => {
    if(!shouldSwapToJerry) {
        shouldSwapToJerry = true;
        imchadaMessage("Swapping to jerry");
        ChatLib.command('pets');
    } else {
        return;
    }
}).setName("debugSpawnJerry");


register("tick", () => {
    if(jerryBind.isPressed()) {
        if(!shouldSwapToJerry) {
            shouldSwapToJerry = true;
            imchadaMessage("Attempting to swarp to Jerry");
            ChatLib.command('pets');
        } else {
            return;
        }
    }
});


register ("tick", (ticks) => {
    if(correctGui && shouldSwapToJerry) {
        let jerrySlot = Player.getContainer()?.getItems()?.findIndex(item => item && item.getName()?.includes("Jerry"));
        if(jerrySlot == -1) {
            imchadaMessage("ja hera pra voce seu bota (/give jerry)");
        }
        Player.getContainer().click(jerrySlot, false, "LEFT");
        correctGui = false;
        shouldSwapToJerry = false;
        Client.currentGui.close();
    }
    if(Player.getContainer().getName() === "Pets") {
        correctGui = true;
    }
});

