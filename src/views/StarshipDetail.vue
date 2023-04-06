<template>
  <div>
    <h1>{{ starship.name }}</h1>
    <img :src="`https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`"
      @error="$event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'" />
  </div>
  <div class="detailsTop">
    <p><span class="features">MODEL:</span> {{ starship.model }}</p>
    <p><span class="features">STARSHIP CLASS:</span> {{ starship.starship_class }}</p>
    <p><span class="features">MANUFACTURER:</span> {{ starship.manufacturer }}</p>
    <p><span class="features">COST:</span> {{ starship.cost_in_credits }} credits</p>
  </div>
  <div class="detailsBottom">
    <div class="detailLeft">
      <p><span class="features">CREW:</span> {{ starship.crew }}</p>
      <p><span class="features">PASSENGER CAPACITY:</span> {{ starship.passengers }}</p>
      <p><span class="features">CARGO CAPACITY:</span> {{ starship.cargo_capacity }} tons</p>
      <p><span class="features">CONSUMABLES:</span> {{ starship.consumables }}</p>
    </div>
    <div class="detailRight">
      <p><span class="features">LENGTH:</span> {{ starship.length }} meters</p>
      <p><span class="features">MAXIMUM ATMOSPHERING SPEED:</span> {{ starship.max_atmosphering_speed }} km/h</p>
      <p><span class="features">HYPERDRIVE RATING:</span> {{ starship.hyperdrive_rating }}</p>
      <p><span class="features">MAXIMUM SPEED IN REALSPACE:</span> {{ starship.MGLT }} MGLT</p>
    </div>
  </div>
  <div>
    <Pilots :pilots="pilots" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Pilots from '@/components/Pilots.vue'

export default {
  name: 'StarshipDetail',
  components: { Pilots },
  props: ['id'],
  computed: {
    ...mapState(['starship', 'pilots'])
  },
  methods: {
    ...mapActions(['fetchStarshipInfo']),
    ...mapMutations(['emptyPilots'])
  },
  mounted() {
    this.fetchStarshipInfo(this.id)
  },
  unmounted() {
    this.emptyPilots()
  }
}

</script>

<style scoped>
h1 {
  color: #ffffff;
  text-transform: uppercase;
}


img {
  background-color: #000000;
  max-width: 90%;
  padding: 10px;
}

.detailsBottom {
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 10px;
  gap: 200px;
}

.features {
  color: #ffffff;
}
</style>