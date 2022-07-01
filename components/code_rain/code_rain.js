const { durationTime } = require("../../src/constants/config");

// components/code_rain/code_rain.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    deleyList: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 随机延迟
    randomDelay(list) {
      let timeList = [];
      list.forEach((e) => {
        const random = Math.random() * 2.5;
        timeList.push(Math.floor(random * 1000) + "ms");
      });
      this.setData({ deleyList: timeList });
    },
    // 组件完成动画
    finish(){
      setTimeout (() => {
        this.triggerEvent("animationEnd",true)
      }, durationTime.rainy )
    }
  },
  observers: {
    text(text) {
      this.randomDelay(text);
    },
  },
  lifetimes:{
    attached(){
      this.finish()
   
    }
  }
});
