

const screen = wx.getSystemInfoSync();
console.log(screen)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    config: {
      // type:Phaser.AUTO,
      width: screen.screenWidth,
      height: screen.screenHeight,
    },
  },
  init() {
    // const game = new Phaser.Game(this.data.config);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // this.init()
  },
});
