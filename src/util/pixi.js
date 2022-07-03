import { createPIXI } from "../../libs/pixi.miniprogram"
const unsafeEval = require("../../libs/unsafeEval")
const installSpine = require("../../libs/pixi-spine")
const installAnimate = require("../../libs/pixi-animate")
const myTween = require("../../libs/myTween")
export default class Game {
    constructor(config) {
        const width = config.width
        const pixi = createPIXI({
            width: width
        })
        unsafeEval(pixi)
        installSpine(pixi);//注入Spine库
        installAnimate(pixi);//注入Animate库
        this.pixi = pixi
    }

}