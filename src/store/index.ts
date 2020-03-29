// import这个关键字，所导入的所有对象是可以被更改的
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 用于安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
// 当 install 方法被同一个插件多次调用，插件将只会被安装一次。

export default new Vuex.Store({
  strict: true, //必须使用 Vuex 的 Mutation 函数来改变 state
  state: { // store对象里所保存的所有状态
    cart: [],
    showLoader: false,
    product: {},
    products: [
      {
        _id: '1',
        name: 'iPhone',
        description: 'iPhone是美国苹果公司研发的智能手机系列，搭载苹果公司研发的iOS操作系统',
        image: 'https://i.gadgets360cdn.com/large/iPhone11_leak_1567592422045.jpg',
        price: 2000,
        manufacturer: 'Apple Inc'
      },
      {
        _id: '2',
        name: '荣耀20',
        description: '李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠 全面屏手机',
        image: 'https://article-fd.zol-img.com.cn/t_s640x2000/g4/M08/0E/0E/ChMlzF2myueILMN_AAGSPzoz23wAAYJ3QADttsAAZJX090.jpg',
        price: 2499,
        manufacturer: '华为'
      },
      {
        _id: '3',
        name: 'MIX2S',
        description: '骁龙845 全面屏NFC 游戏智能拍照手机 白色 全网通 6+128',
        image: 'http://himg2.huanqiu.com/attachment2010/2018/0129/08/39/20180129083933823.jpg',
        price: 1688,
        manufacturer: '小米'
      },
      {
        _id: '4',
        name: 'IQOO Pro',
        description: '12GB+128GB 竞速黑 高通骁龙855Plus手机 4800万AI三摄 44W超快闪充 5G全网通手机',
        image: 'https://www.tabletowo.pl/wp-content/uploads/2019/08/vivo-iqoo-pro-5g-blue-1.jpg',
        price: 4098,
        manufacturer: 'Vivo'
      },
      {
        _id: '5',
        name: 'Reno2',
        description: '【12期免息1年碎屏险】4800万变焦四摄8+128G防抖6.5英寸全面屏新 深海夜光(8GB+128GB) 官方标配',
        image: 'https://news.maxabout.com/wp-content/uploads/2019/08/OPPO-Reno-2-1.jpg',
        price: 2999,
        manufacturer: 'OPPO'
      }
    ],
    manufacturers: [],
  },
  // state 就是我们 Vuex Store 中保存的 state，payload 是被响应的那个事件或动作携带的参数，然后我们通过 payload 的参数来操作现有的 state，返回新的 state
  mutations: {
    ADD_TO_CART(state: any, payload: any) {
      const { product } = payload;
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state: any, payload: any) {
      const { productId } = payload
      state.cart = state.cart.filter((product: any) => product._id !== productId)
    }
  }, // 修改 Vuex Store 中保存状态的唯一手段。
  actions: {},
  modules: {}
});
