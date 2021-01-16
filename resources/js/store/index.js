import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuActive: 1,
    urlApi: 'http://127.0.0.1:8003/api/v1/',
    company: null,
    user: null,
    menuActiveWelcome: 1
  }
});