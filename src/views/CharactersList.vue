<template>
  <div class="charactersList" v-for="(character, index) in charactersList" :key="index">
    <router-link :to="{ name: 'character', params: { id: getId(character.url) } }">
      <h4>{{ character.name.toUpperCase() }}</h4>
    </router-link>
  </div>
  <button type="button" @click="moreCharacters" v-show="charactersList.length < 82">VIEW MORE...</button>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'CharactersList',
  computed: {
    ...mapState(['charactersList', 'currentPageCharacters'])
  },
  methods: {
    ...mapActions(['fetchCharacters', 'fetchMoreCharacters']),
    moreCharacters() {
      this.fetchMoreCharacters()
    },

    getId(url) {
      const IdNumber = url.replace(/\D/g, "");
      return IdNumber;
    }
  }
}
</script>

<style scoped>
.charactersList {
  text-align: center;
  background-color: #1D1E1F;
  max-width: 40%;
  margin: 0 auto;
}

a:hover {
  color: #ffffff;
}

a {
  text-decoration: none;
  color: #AAAAAA;
}

h4 {
  padding: 10px 0;
}
</style>
