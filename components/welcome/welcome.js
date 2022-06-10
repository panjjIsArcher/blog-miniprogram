import { init, test , orbiControl} from "../../src/util/three";
import * as THREE from "../../libs/three.weapp.min";
import { global  } from "../../libs/three.weapp";
Component({
  data: {
    canvasId: "canvas", //canvas的id
  },
  lifetimes: {
    ready() {
      const canvasId = this.data.canvasId;
      const query = wx.createSelectorQuery().in(this);
      const node = query.select(`.${this.data.canvasId}`).node();
      node.in(this).exec((res) => {
        const canvas = THREE.global.registerCanvas(res[0].node);
        // 初始化webgl
        const webGl = init(canvasId, canvas);
        orbiControl()
        const cube = test();
        cube.position.x = 0;
        cube.position.y = 0;
        cube.position.z = 0;
        cube.name = "cube";
        webGl.scene.add(cube);
        console.log(webGl)
      });
    },
  },
});
