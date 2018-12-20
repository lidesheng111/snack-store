import store from '../../store.js';
import create from '../../utils/create.js';

const db = wx.cloud.database();

create(store, {
  data: {
      themedProducts: [],
      headImg: '',
  },

  onLoad: function (options) {
        let themeId = Number(options.id);
        let headImg = options.img;
        let name = options.name;

        wx.setNavigationBarTitle({ title: name });
        this.setData({ headImg });
        this._getTheme(themeId);
  },

  _getTheme(id) {
        db.collection('products').where({ themeId: id }).get()
        .then( res => {
            this.store.data.themedProducts = res.data;
            this.update();
        })
        .catch( err => {
            console.error(err)
        })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})