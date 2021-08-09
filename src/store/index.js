import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from './auth/auth';
import {postInfo} from './post/post';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    postInfo
  }
})
