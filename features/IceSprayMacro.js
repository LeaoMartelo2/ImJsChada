import { swapAndRightClick } from "../utils";

const keyspray = new KeyBind("Ice Spray macro", Keyboard.KEY_NONE, "ImJSchada");

register("tick", () => {
    if(keyspray.isPressed())
    {
        let index = Player?.getInventory()?.getItems()?.findIndex(item => item?.getName()?.includes("Ice Spray Wand"))
        if (index == -1) return
        swapAndRightClick(index)
    }
} )