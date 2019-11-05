// componets/search.js
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
    fixText:"",
    history:[
      
    ],
    hideHistory:false,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    InitHistory:function(array){
      this.data.hideHistory = false
      this.data.history = array
      this.setData({ history: this.data.history, hideHistory:this.data.hideHistory})
    },
    onInput: function (e) {
      var data = e.detail.value
      this.triggerEvent("onSearchInput", data, null)
    },
    onFocus:function(e){
      console.info(e)
      this.data.hideHistory = true
      this.setData({ hideHistory: this.data.hideHistory})
    },
    onLostFocus:function(e){
      this.data.hideHistory = false
      this.setData({ hideHistory: this.data.hideHistory})
    },
    onTapHistory:function(e){
      var data = e.target.dataset.item
      this.triggerEvent("onClickHistoryItem", data, null)
    },
    
    onConfirm:function(e){
      var bFind = false
      var value = e.detail.value
      this.updateHistory(value)
      var data = value
      this.triggerEvent("onConfirm", data, null)
    },
    AddToHistory: function (value){
      this.updateHistory(value)
    },
    updateHistory:function(value){
      var bFind = false
      for (var item in this.data.history) {
        if (this.data.history[item] == value) {
          bFind = true
          break
        }
      }

      if (this.data.history.length + 1 > 8) {
        this.data.history.pop()
      }

      if (bFind == false) {
        this.data.history.unshift(value)
        console.info(this.data.history)
        this.setData({ history: this.data.history})
      }
    }
  }
})
