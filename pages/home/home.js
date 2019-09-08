// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgagepath:"",
  },
  handleChooseAlbum(){
    wx.chooseImage({

      success:(res)=>{
        const tempFilePaths = res.tempFilePaths[0]
        console.log(tempFilePaths);
        this.setData({
          imgagepath:tempFilePaths
        })
      }
    })
  },
  
  handleImageLoad(){
    console.log('图片加载完成')
  }

})