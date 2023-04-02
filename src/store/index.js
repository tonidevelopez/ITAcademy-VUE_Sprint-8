import { createStore } from 'vuex'

export default createStore({
  state: {
    starshipsList: [],
    starship: [],
    currentPage: 1
  },

  getters: {
  },

  mutations: {
    setStarshipsList(state, starships) {
      state.starshipsList = starships
    },
    setStarship(state, starshipInfo) {
      state.starship = starshipInfo
    },
    setCurrentPage(state) {
      state.currentPage++;
    },
    setMoreStarships(state, moreStarships) {
      if (state.starshipsList.length < moreStarships.count) {
        state.starshipsList = state.starshipsList.concat(moreStarships.results);
      }
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
    },
    async fetchMoreStarships({ commit }) {
      commit('setCurrentPage');
      const res = await fetch(`https://swapi.dev/api/starships/?page=${this.state.currentPage}`);
      const data = await res.json();
      commit('setMoreStarships', data);

    }
  },

  modules: {
  }
})
