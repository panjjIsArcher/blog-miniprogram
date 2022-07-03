import Game from "../../src/util/pixi"
const screen = wx.getSystemInfoSync();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    config: {
      width: screen.screenWidth,
      height: screen.screenHeight,
    },
  },
  init(config) {
     const game = new Game(config)
     this.data.game = game
     
  },
  async onLoad(options) {
    // 初始化 pixi
    this.init(this.data.config)
  },
  
});
