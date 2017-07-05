import * as types from './mutation-types'

const state = {
  items: [
    {name: 'Tee-shirt', stock: 10},
    {name: 'Polo', stock: 0}
  ]
}

export const mutations = {
  [types.INCREASE] (state, payload) {
    state.items[payload.index].stock++
  },
  [types.DECREASE] (state, payload) {
    state.items[payload.index].stock--
  }
}

export default {
  state,
  mutations
}
