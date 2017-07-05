import Vue from 'vue'
import Vuex from 'vuex'

import documents from './modules/documents/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    documents
  },
  strict: process.env.NODE_ENV !== 'production'
})
