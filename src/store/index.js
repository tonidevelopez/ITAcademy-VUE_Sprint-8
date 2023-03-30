import router from '@/router'
import { createStore } from 'vuex'

export default createStore({
  state: {
    starshipsList: [],
    starship: []
  },

  getters: {
  },

  mutations: {
    setStarshipsList(state, starships) {
      state.starshipsList = starships
    },
    setStarship(state, starshipInfo) {
      state.starship = starshipInfo
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
    },
    async fetchStarshipInfo({ commit }, id) {
      try {
        const res = await fetch(`https://swapi.dev/api/starships/${id}/`)
        const data = await res.json()
        commit('setStarship', data)
      }
      catch (error) {
        console.log(error)
      }
    }
  },

  modules: {
  }
})
