import { swapAndRightClick } from "../utils";

const keyrogue = new KeyBind("Use Rogue Sword", Keyboard.KEY_NONE, "ImJSchada");

register("tick", () => {
    if(keyrogue.isPressed())
    {
        let index = Player?.getInventory()?.getItems()?.findIndex(item => item?.getName()?.includes("Rogue Sword"))
        if (index == -1) return
        swapAndRightClick(index)
    }
} )