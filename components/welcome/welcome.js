

import {init} from "../../src/util/three"
import * as THREE from "../../libs/three.weapp.min"
Component({
    data:{
      canvasId: 'canvas' //canvas的id
    },
    lifetimes:{
      ready(){    
        const canvasId = this.data.canvasId;
        const query =  wx.createSelectorQuery().in(this)
        const node = query.select(`#${this.data.canvasId}`).node();
        console.log(node)
        node.in(this).exec(res=>{
          console.log(res)
          const canvas = THREE.global.registerCanvas(res[0].node)
          init( canvasId , canvas   )
        })
    
      }
    }
})
