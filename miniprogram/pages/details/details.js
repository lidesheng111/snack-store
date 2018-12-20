import store from '../../store.js';
import create from '../../utils/create.js';

const db = wx.cloud.database();

create(store, {

  data: {
    prodDetails: null,
    id: null,
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    index: 0,
    swiperIndex: null,
  },

  onLoad: function (options) {
    this.setData({ id: options._id });
  },

  onNewVlue(e) {
    this.setData({ index: e.detail.value });
  },

  onChangeSwiper(e) {
    let index = e.currentTarget.dataset.index;
    this.store.data.swiperIndex = index;
    this.update();
  },

    // onSetSource() {
    //     let source = this.store.data.prodDetails.detailsProps;
    //     this.store.data.source = source;
    //     this.update();
    // },

  onReady: function () {
    db.collection('products').where({ _id: this.data.id }).get()
      .then(res => {
        this.store.data.prodDetails = res.data[0];
        // let source = res.data[0].detailsProps;
        // this.store.data.source = source;
        this.update();
      })
      .catch(err => console.log(err));
    // db.collection('products').doc('XBknE8DR1TiN8L14').update({
    //   data: {
    //     detailsImg: [
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-1@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-2@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-3@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-4@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-5@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-6@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-7@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-8@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-9@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-10@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-11@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-12@1-dryfruit.png',
    //       'https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/detail-13@1-dryfruit.png',
    //     ],
    //     detailsProps: {
    //       '品名': '杨梅', 
    //       '口味': ['青梅味', '雪梨味', '黄桃味', '菠萝味'], 
    //       '产地': '火星', 
    //       '保质期': '180天' 
    //     }
    //   },

    // success: res => console.log(res),
    // fail: err => console.error(err)
    // })
  },

  onShow: function () {
      console.log(this.store.data)
  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})