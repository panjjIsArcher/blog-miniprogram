// pages/index/index.js
import { durationTime, pages } from "../../src/constants/config";
Page({
  /**
   * Page initial data
   */
  data: {
    showCanvas: false,
    showCodeRain: true,
    showPill:false,
    codeList: [],
  },
  async text() {
    const px = 16;
    const screen = wx.getSystemInfoSync();
    const screenWidth = screen.windowWidth;
    const num = Math.floor(screenWidth / px);
    let codeList = [];
    for (let i = 0; i < num; i++) {
      let str = "";
      for (let codeIndex = 0; codeIndex < 14 * 2; codeIndex++) {
        //生成一个0到25的数字
        const ranNum = Math.ceil(Math.random() * 25);
        //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
        str += String.fromCharCode(65 + ranNum);
      }
      codeList.push(str);
    }
    this.setData({ codeList });
  },
  animationEnd(e){
    if(e.detail){
      wx.navigateTo({
        url: pages.game,
      })
    }
  },
  onLoad() {
    // 生成文字
    this.text();
    setTimeout(() => {
      this.setData({
        showCodeRain: false,
        showCanvas: false,
        showPill:true
      });
    }, durationTime.rainy);
  },
});
