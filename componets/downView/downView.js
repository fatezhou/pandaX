// componets/downView/downView.js
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
    expand:false,
    date:"2019-10-10",
    title:"Title",
    showAll:false,
    littleText:"texttexttexttextt...",
    fullText:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    integrations:[
      
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapExpand: function(e){
      this.data.expand = !this.data.expand
      this.data.showAll = this.data.expand
      this.setData({ expand: this.data.expand, showAll: this.data.showAll})
    },
    Init:function(obj){
      this.data.title = obj.title
      if(obj.text.length > 8){
        this.data.littleText = obj.text.substr(0, 8) + "..."
      }else{
        this.data.littleText = obj.text
      }
      this.data.fullText = obj.text
      this.data.integrations = obj.integrations //[id, name, score], from 0 start
      this.data.avg = 0
      this.data.date = obj.date
      this.setData(this.data)
      for(var i = 0; i < 5; i++){
        this.data.avg += this.data.integrations[i].score
        let ring = this.selectComponent("#ring" + i.toString())
        ring.drawCircleBg("bg", 30, 2)
        ring.drawCircle('draw', 30, 2, this.data.integrations[i].score/100);
      }
      this.data.avg = this.data.avg/500
      this.ring = this.selectComponent("#ring-avg")
      this.ring.drawCircleBg("bg", 30, 2)
      this.ring.drawCircle('draw', 30, 2, this.data.avg);  
    }
  },
  ready: function() {
    this.ring = this.selectComponent("#ring-avg")
    this.ring.drawCircleBg("bg", 30, 2)
    this.ring.drawCircle('draw', 30, 2, 0.8);  
  }
})
