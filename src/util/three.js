import * as THREE from "../../libs/three.weapp.min";
import { OrbitControls } from "../../jsm/controls/OrbitControls";
import { Mesh } from "../../libs/three.weapp";

const screenWidth = wx.getSystemInfoSync().screenWidth;
const screenHeight = wx.getSystemInfoSync().screenHeight;
let canvasSecne, canvasGlabolElement, canvasCamera, canvasRender, globalWebGl;
let testGeo;

const fontloader = new THREE.FontLoader();

export const init = function (canvasId = "canvas", canvasElement) {
  const camera = new THREE.PerspectiveCamera(
    45,
    screenWidth / screenHeight,
    1,
    1000
  );
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  const webGl = { camera, scene, renderer, canvasElement };
  // 设置全局相关的webgl
  globalWebGl = webGl;

  // 设置scene相关
  scene.background = new THREE.Color(0x000000);
  // 设置camera
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 1;
  // 设置renderer
  renderer.setSize(screenWidth, screenHeight);

  //赋值到全局变量
  canvasSecne = scene;
  canvasGlabolElement = canvasElement;
  canvasCamera = camera;
  canvasRender = renderer;

  // 开始渲染
  render(canvasGlabolElement, scene, camera, renderer);
  return webGl;
};
// 启动渲染
export const render = (
  canvas = canvasGlabolElement,
  scene = canvasSecne,
  camera = canvasCamera,
  renderer = canvasRender
) => {
  if (testGeo?.rotation) {
    testGeo.rotation.x += 0.1;
  }
  canvasGlabolElement.requestAnimationFrame(render);
  renderer.render(scene, camera);
};
// 新增物体
export const addObject = function (object) {
  if (globalWebGl) {
    globalWebGl.scene.add(object);
  }
};
// 增加控制器
export const orbiControl = function () {
  const orbit = new OrbitControls(canvasCamera, canvasGlabolElement);
  orbit.update();
};
// 字体
export const textAdd = async function (
  text = "hello pjj",
  param = { size: 100, height: 100 }
) {
  let font;
  await fontloader.load(
    "https://threejs.org/examples/fonts/optimer_bold.typeface.json",
    (value) => {
      font = value;
      const textGeo = new THREE.TextGeometry(text, {
        font: font,
        size: 0.15,
        height: 0.1,
      });
      const mesh = new Mesh(
        textGeo,
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      canvasSecne.add(mesh);
      mesh.position.set(0.1, 0.1, -2);
      const scale = 0.5;
      mesh.scale.x = scale;
      mesh.scale.y = scale;
      mesh.scale.z = scale;
      const obj = {
        x: mesh.position.x,
        y: mesh.position.y,
        z: mesh.position.z,
      };

      return mesh;
    }
  );
};
// 测试
export const test = function () {
  const geo = new THREE.PlaneGeometry(0.1, 0.1);
  const metarial = new THREE.MeshBasicMaterial({
    color: 0x0000a0,
    side: THREE.DoubleSide,
  });
  const cube = new THREE.Mesh(geo, metarial);
  cube.position.set(-0.1, 1, -3);
  testGeo = cube;
  return cube;
};
