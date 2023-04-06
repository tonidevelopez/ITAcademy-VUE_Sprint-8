import router from '@/router';
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    logged: false,
    loggedUser: '',
    registerModal: false,
    loginModal: false,
    currentPageStarships: 1,
    starshipsList: [],
    starship: [],
    pilots: [],
    currentPageCharacters: 1,
    charactersList: [],
    character: [],
    characterFilms: [],
    characterStarships: []
  },

  getters: {
  },

  mutations: {
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
    },
    setCurrentPageStarships(state) {
      state.currentPageStarships++;
    },
    setStarshipsList(state, starships) {
      state.starshipsList = starships
    },
    setMoreStarships(state, moreStarships) {
      if (state.starshipsList.length < moreStarships.count) {
        state.starshipsList = state.starshipsList.concat(moreStarships.results);
      }
    },
    setStarship(state, starshipInfo) {
      state.starship = starshipInfo
    },
    setPilots(state, pilotsData) {
      pilotsData.forEach((url) => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            state.pilots.push(data);
          });
      });
    },
    emptyPilots(state) {
      state.pilots = [];
    },
    setCurrentPageCharacters(state) {
      state.currentPageCharacters++;
    },
    setCharactersList(state, characters) {
      state.charactersList = characters;
    },
    setMoreCharacters(state, moreCharacters) {
      if (state.charactersList.length < moreCharacters.count) {
        state.charactersList = state.charactersList.concat(moreCharacters.results);
      }
    },
    setCharacter(state, characterInfo) {
      state.character = characterInfo;
    },
    setCharacterFilms(state, filmsData) {
      filmsData.forEach((url) => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            state.characterFilms.push(data);
          });
      });
    },
    setCharacterStarships(state, starshipsData) {
      starshipsData.forEach((url) => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            state.characterStarships.push(data);
          });
      });
    },
    emptyCharacter(state) {
      state.characterFilms = [];
      state.characterStarships = [];
    },
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
    async fetchMoreStarships({ commit }) {
      commit('setCurrentPageStarships');
      const res = await fetch(`https://swapi.dev/api/starships/?page=${this.state.currentPageStarships}`)
      const data = await res.json()
      commit('setMoreStarships', data)
    },
    async fetchStarshipInfo({ commit }, id) {
      try {
        const res = await fetch(`https://swapi.dev/api/starships/${id}/`)
        const data = await res.json()
        commit('setStarship', data),
          commit('setPilots', data.pilots)
      }
      catch (error) {
        console.log(error)
      }
    },
    async fetchCharacters({ commit }) {
      try {
        const res = await fetch('https://swapi.dev/api/people/')
        const data = await res.json()
        commit('setCharactersList', data.results)
      }
      catch (error) {
        console.log(error)
      }
    },
    async fetchMoreCharacters({ commit }) {
      commit('setCurrentPageCharacters');
      const res = await fetch(`https://swapi.dev/api/people/?page=${this.state.currentPageCharacters}`)
      const data = await res.json()
      commit('setMoreCharacters', data)
    },
    async fetchCharacterInfo({ commit }, id) {
      try {
        const res = await fetch(`https://swapi.dev/api/people/${id}/`)
        const data = await res.json()
        commit('setCharacter', data)
        commit('setCharacterFilms', data.films)
        commit('setCharacterStarships', data.starships)
      }
      catch (error) {
        console.log(error)
      }
    }
  },

  modules: {
  }
})
