const db = wx.cloud.database();

Page({
    data: {
        banner: [],
        themes: [],
        productsList: [],
    },

    onLoad: function(options) {
        db.collection('banner').get()
            .then( res => {
                this.setData({ banner: res.data });
            })
            .catch(err => console.error(err));

        db.collection('themes').get()
            .then( res => {
                this.setData({ themes: res.data });
            })
            .catch( err => console.error(err) );

        db.collection('products').limit(15).get()
            .then(res => {
                // console.log(res);
                this.setData({ productsList: res.data });
            })
            .catch(err => console.error(err));
    },

    toTheme(e) {
      let themeId = e.currentTarget.dataset.info[0];
      let themeName = e.currentTarget.dataset.info[1]
      wx.navigateTo({
        url: '../theme/theme?id=' + themeId + '&name=' + themeName,
      })
    },


    onReady: function() {
    
    },

    onShow: function() {

    },

    onHide: function() {

    },

    onUnload: function() {

    },

    onPullDownRefresh: function() {

    },

    onReachBottom: function() {

    },

    onShareAppMessage: function() {

    }
})