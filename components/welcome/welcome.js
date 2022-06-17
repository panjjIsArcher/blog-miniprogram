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
         await textAdd("hello world");
        // console.log(textGeo);
        addObject(cube);
      });
    },
  },
});
