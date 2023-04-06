<template>
  <div>
  </div>
  <div class="character-detail">
    <img :src="`https://starwars-visualguide.com/assets/img/characters/${this.id}.jpg`"
      @error="$event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'" />
    <div class="character-info">
      <h1>{{ character.name }}</h1>
      <p><span class="features">Height: </span>{{ character.height }}</p>
      <p><span class="features">Mass: </span>{{ character.mass }}</p>
      <p><span class="features">Hair color: </span>{{ character.hair_color }}</p>
      <p><span class="features">Skin color: </span>{{ character.skin_color }}</p>
      <p><span class="features">Eye color: </span>{{ character.eye_color }}</p>
      <p><span class="features">Birth Year: </span>{{ character.birth_year }}</p>
      <p><span class="features">Gender: </span>{{ character.gender }}</p>
    </div>
  </div>
  <div class="films-detail">
    <h2>FILMS</h2>
    <div v-for="(film, index) in characterFilms" :key="index">
      <div class="films-header">
        <h3>{{ film.title }}</h3>
      </div>
      <div class="films-content">
        <div class="films-left">
          <p><span class="features">Episode: </span>{{ film.episode_id }}</p>
          <p><span class="features">Director: </span>{{ film.director }}</p>
          <p><span class="features">Producer: </span>{{ film.producer }}</p>
          <p><span class="features">Release date: </span>{{ film.release_date }}</p>
        </div>
        <div class="films-right">
          <p>{{ film.opening_crawl }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="starships-detail">
    <h2>STARSHIPS</h2>
    <div v-for="(starship, index) in characterStarships" :key="index" class="starship-link">
      <h3>{{ starship.name }}</h3>
      <div class="starships-info">
        <p><span class="features">Model: </span>{{ starship.model }}</p>
        <p><span class="features">Class: </span>{{ starship.starship_class }}</p>
        <router-link :to="{ name: 'starship', params: { id: getId(starship.url) } }">
          <button>Get more info...</button>
        </router-link>
      </div>
    </div>
    <div v-if="!characterStarships.length">
      <p>There are no starships in our database</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'CharacterDetail',
  props: ['id'],
  computed: {
    ...mapState(['character', 'characterFilms', 'characterStarships', 'starship'])
  },
  methods: {
    ...mapActions(['fetchCharacterInfo', 'fetchStarshipInfo']),
    ...mapMutations(['emptyCharacter']),
    getId(url) {
      const IdNumber = url.replace(/\D/g, "");
      return IdNumber;
    }
  },
  mounted() {
    this.fetchCharacterInfo(this.id)
  },
  unmounted() {
    this.emptyCharacter()
  }
}

</script>

<style scoped>
.character-detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  gap: 20px;
  margin-top: 20px;
  padding: 10px;
}

h1 {
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;
}

h2 {
  color: #ffffff;
  border-bottom: 1px solid #AAAAAA;
  padding-bottom: 10px;
}

img {
  background-color: #000000;
  max-width: 250px;
}

.features {
  color: #ffffff;
}

a:hover {
  color: #ffffff;
}

a {
  text-decoration: none;
  color: #AAAAAA;
}

.films-detail {
  display: flex;
  flex-direction: column;
  background-color: #1D1E1Fcc;
  border-radius: 10px;
  width: 80%;
  margin: 50px auto;
}


h3 {
  margin: 0;
  color: #fff;
  text-transform: uppercase;
}

.films-content {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
  width: 80%;

}

.films-left {
  text-align: right;
  width: 50%;
}

.films-right {
  width: 50%;
  text-align: left;
}

.starships-detail {
  display: flex;
  flex-direction: column;
  background-color: #1D1E1Fcc;
  border-radius: 10px;
  width: 50%;
  margin: 50px auto;
}

.starships-info {
  padding-bottom: 20px;
}

button {
  font-size: smaller;
}
</style>