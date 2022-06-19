import { init, addObject,test, textAdd } from "../../src/util/three";
import * as THREE from "../../libs/three.weapp.min";
import { global } from "../../libs/three.weapp";
Component({
  data: {
    canvasId: "canvas", //canvas的id
  },
  lifetimes: {
    ready() {
      const canvasId = this.data.canvasId;
      const query = wx.createSelectorQuery().in(this);
      const node = query.select(`.${this.data.canvasId}`).node();
      node.in(this).exec(async (res) => {
        const canvas = THREE.global.registerCanvas(res[0].node);
        // 初始化webgl
        init(canvasId, canvas);
        const cube = test()
        // 新增数字雨
         await textAdd("在母体中，你所见的皆非真实");
         await textAdd("选择蓝色药丸，你明早将在床上醒来，继续你的生活");
         await textAdd("选择红色药丸，我将带你去看这个世界的真相……");
        // console.log(textGeo);
        addObject(cube);
      });
    },
  },
});
