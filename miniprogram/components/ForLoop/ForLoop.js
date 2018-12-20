
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        source:Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        // source1: '00'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        test() {
            // let value = this.properties.source;
            // this.setData({
            //     source1: value
            // })
            console.log(this.data, 'data')
        }
    },

    lifetimes: {
        attached() {
            console.log(this.properties.source, 'attached')
        },
        detached() {
            // 在组件实例被从页面节点树移除时执行
        },
    },

    ready() {
        this.test()
        console.log(this.data, 'ready')
    },

    pageLifetimes: {
        show() {
            console.log(this.properties.source, 'show')
        },
        hide() {
            console.log(this.properties.source, 'hide')
        },
        resize(size) {
            // 页面尺寸变化
        }
    }
})
