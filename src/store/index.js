import router from '@/router'
import { createStore } from 'vuex'

export default createStore({
  state: {
    starshipsList: []
  },

  getters: {
  },

  mutations: {
    setStarshipsList(state, starships) {
      state.starshipsList = starships;
    }
  },

  actions: {
    async fetchStarships({ commit }) {
      try {
        const res = await fetch('https://swapi.dev/api/starships/')
        const data = await res.json()
        commit('setStarshipsList', data.results)
      }
      catch (error) {
        console.log(error)
      }
    }
  },

  modules: {
  }
})
