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
  canvasRender() {
    const game = this.data.game
    const pixi = game.pixi
    const query = wx.createSelectorQuery()
    const config = this.data.config
    query.select("#pixi").fields({ node: true, size: true }).exec(res => {
      const canvas = res[0].node
      pixi.autoDetectRenderer({
        width: config.width, 
        height: config.height,
        premultipliedAlpha:true,
        view: canvas, // 注入 canvas
        transparent: false ,//背景，
        backgroundColor:0x000000
      })

    })
  },
  async onLoad(options) {
    // 初始化 pixi
    this.init(this.data.config)
    this.canvasRender()
  },

});
