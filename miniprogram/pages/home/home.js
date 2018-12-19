import store from '../../store';
import create from '../../utils/create';
const db = wx.cloud.database();

create(store, {
    data: {
        banner: [],
        themes: [],
        productsList: [],
    },

    onLoad: function (options) {
        db.collection('banner').get()
            .then( res => {
                this.store.data.banner = res.data;
                this.update();
            })
            .catch(err => console.error(err));

        db.collection('themes').get()
            .then( res => {
                this.store.data.themes = res.data;
                this.update();
            })
            .catch( err => console.error(err) );

        db.collection('products').limit(15).get()
            .then(res => {
                // console.log(res);
                this.store.data.productsList = res.data;
                this.update();
            })
            .catch(err => console.error(err));
    },

    toTheme(e) {
        console.log(e)
        let value = e.currentTarget.dataset.info.split(',');
        let themeId = value[0];
        let themeImg = value[1].trim();
        let name = value[2].trim();
        wx.navigateTo({
            url: '../theme/theme?id=' + themeId + '&img=' + themeImg + '&name=' + name,
        })
    },


    onReady: function() {
    
    },

    onShow: function() {
        console.log(this.store)
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