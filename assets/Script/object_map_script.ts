import { _decorator, BoxCollider2D, Color, Component, Node, RigidBody2D, SpriteFrame, TiledMap, Vec2 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("object_map_script")
export class object_map_script extends Component {
    @property({ type: Node })
    img: Node = null;
    start() {
        let map = this.node.getComponent(TiledMap);
        // console.log("map", map);
        let layers = map.getLayers();
        let groups = map.getObjectGroups();
        console.log("groups ", groups);

        // to get all objects

        // for (let i = 0; i < groups.length; i++) {
        //     let objects = groups[i].getObjects();

        //     for (let obj of objects) {
        //         console.log("obj", obj);

        //         for (let entry in obj) {
        //             if (obj.hasOwnProperty(entry)) {
        //                 let value = obj[entry];
        //                 console.log("Property:", entry, "Value:", value);
        //             }
        //         }
        //     }
        // }

        // to get a specific object
        const targetId = "player";
        let card = "card";

        for (let i = 0; i < groups.length; i++) {
            let objects = groups[i].getObjects();
            const player = objects.find((obj) => obj.name === targetId);
            const cardObj = objects.find((obj) => obj.name === card);
            if (cardObj) {
                console.log("card object", cardObj);
            }

            if (player) {
                console.log("player", player);
                this.img.active = true;
                this.img.setPosition(player.x, player.y);
                this.node.addChild(this.img);

                let playerRigidBody = this.img.getComponent(RigidBody2D);

                // for (let entry in targetObject) {
                //     if (targetObject.hasOwnProperty(entry)) {
                //         let value = targetObject[entry];
                //         console.log("Property:", entry, "Value:", value);
                //     }
                // }
                break;
            }
        }

        console.log(layers.length);
    }

    update(deltaTime: number) {}
}
