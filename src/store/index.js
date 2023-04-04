import router from '@/router';
import { createStore } from 'vuex'

export default createStore({
  state: {
    starshipsList: [],
    starship: [],
    currentPage: 1,
    users: [],
    logged: false,
    loggedUser: '',
    registerModal: false,
    loginModal: false,
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
    },
    checkDataBase(state) {
      const dataBase = JSON.parse(localStorage.getItem('user'));
      if (dataBase === null) {
        state.users = [];
      } else {
        state.users = dataBase;
      }
      console.table(state.users)
    },
    createAccount(state, userData) {
      const checkEmail = state.users.map((user) => user.email.toLowerCase());
      if (!checkEmail.includes(userData.email.toLowerCase())) {
        state.users.push(userData);
        state.registerModal = false;
        state.loginModal = true;
        localStorage.setItem('user', JSON.stringify(state.users));
        console.table(this.state.users);
      } else {
        console.log("This email address is not available. Choose a different address.");
      }
    },
    logIn(state, userData) {
      if (state.users.some((user) => userData.email === user.email)) {
        if (state.users.some((user) => userData.email === user.email && userData.password === user.password)) {
          state.loggedUser = userData.email;
          state.logged = true;
          state.loginModal = false;
          console.log("Log in: " + state.loggedUser);
        } else {
          state.logged = false;
          console.log("Wrong password");
        }
      } else {
        state.logged = false;
        console.log("There is no user registered with this email.");
      }
    },
    logOut(state) {
      console.log("Log out: " + state.loggedUser)
      state.logged = false;
      state.loggedUser = '';
      router.push({ name: 'home' });
    },
    toggleLoginModal(state) {
      state.loginModal = !state.loginModal;
    },
    toggleRegisterModal(state) {
      state.registerModal = !state.registerModal;
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
