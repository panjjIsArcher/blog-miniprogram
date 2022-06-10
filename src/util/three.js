import * as THREE from "../../libs/three.weapp.min"
import { OrbitControls } from "../../jsm/controls/OrbitControls"
const scene =  wx.getSystemInfoSync()
const screenWidth = scene.screenWidth
const screenHeight = scene.screenHeight
export const init = function(canvasId = "canvas",canvasElement){
    const camera = new THREE.PerspectiveCamera(60, screenWidth/screenHeight ,1,1000);
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    // 设置scene相关
    scene.background = new THREE.Color(0x000000);
    // 设置camera
    camera.position.x = 0;
    camera.position.z = 0.1;
    camera.position.y = 0;
    // 开始渲染
    render(canvasElement,scene,camera,renderer);
}

export const render = function(canvas,scene,camera,renderer){
    canvas.requestAnimationFrame(render)
    renderer.render(scene, camera)
}