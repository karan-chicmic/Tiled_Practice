import { _decorator, Component, Node, TiledMap, UITransform } from "cc";
const { ccclass, property } = _decorator;

@ccclass("terrain_script")
export class terrain_script extends Component {
    @property({ type: Node })
    playerNode: Node = null;
    start() {
        let map = this.node.getComponent(TiledMap);
        let groups = map.getObjectGroups();

        for (let i = 0; i < groups.length; i++) {
            let objects = groups[i].getObjects();
            let player = objects.find((obj) => obj.name === "player");

            if (player) {
                console.log(player);

                console.log(player.x);
                console.log(player.y);
                let x = player.x - groups[i].node.getComponent(UITransform).width / 2;
                let y =
                    player.y -
                    groups[i].node.getComponent(UITransform).height / 2 +
                    this.playerNode.getComponent(UITransform).height / 2;
                console.log("x", x);
                console.log("y", y);
                this.playerNode.setPosition(x, y);
                this.playerNode.active = true;
            } else {
                console.log("else executed");
            }
        }
    }

    update(deltaTime: number) {}
}
