// componets/listDown/listDown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    row:[
      
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapItem:function(e){
      this.triggerEvent('onListDownTapItem', e.target.dataset.item, null)
    },
    SetRows:function(array){
      this.data.row = array
      this.setData({row:this.data.row})
    },
  }
})
