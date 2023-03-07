//import { Blockk, C02PacketUseEntity } from "../BloomCore/utils/Utils"

export function imchadaMessage(string) {
    ChatLib.chat("§f[§cIm§6JS§cchada§f] §r" + string)
}

export function privateMessage(playerName, message) {
    ChatLib.command("msg " + playerName + " " + message);
}



const rightClickMethod = Client.getMinecraft().getClass().getDeclaredMethod("func_147121_ag")
rightClickMethod.setAccessible(true)

export function rightClick() {
    rightClickMethod.invoke(Client.getMinecraft())
}

export function swapAndRightClick(index, swapBack = true) {
    if (index < 0 || index > 8) {
       imchadaMessage("§cCannot swap. Not in hotbar.")
        return
    }
    let previousItem = Player.getHeldItemIndex()
    Player.setHeldItemIndex(index)
    rightClick()
    if (swapBack) Player.setHeldItemIndex(previousItem)
}
