import Vue from 'vue'
import Vuex from 'vuex'
import indexStore from "@/store/modules/index"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      index: indexStore,
    },
  })
  