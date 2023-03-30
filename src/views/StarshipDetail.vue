<template>
  <div>
    <h1>{{ starship.name }}</h1>
    <img :src="`https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`"
      @error="$event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'" />
  </div>
  <div>
    <p>MODEL: {{ starship.model }}</p>
    <p>STARSHIP CLASS: {{ starship.starship_class }}</p>
    <p>MANUFACTURER: {{ starship.manufacturer }}</p>
    <p>COST: {{ starship.cost_in_credits }} credits</p>
  </div>
  <div>
    <p>CREW: {{ starship.crew }}</p>
    <p>PASSENGER CAPACITY: {{ starship.passengers }}</p>
    <p>CARGO CAPACITY: {{ starship.cargo_capacity }} tons</p>
    <p>CONSUMABLES: {{ starship.consumables }}</p>
  </div>
  <div>
    <p>LENGTH: {{ starship.length }} meters</p>
    <p>MAXIMUM ATMOSPHERING SPEED: {{ starship.max_atmosphering_speed }} km/h</p>
    <p>HYPERDRIVE RATING: {{ starship.hyperdrive_rating }}</p>
    <p>MAXIMUM SPEED IN REALSPACE: {{ starship.MGLT }} MGLT</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'StarshipDetail',
  props: ['id'],
  computed: {
    ...mapState(['starship'])
  },
  methods: {
    ...mapActions(['fetchStarshipInfo'])
  },
  mounted() {
    this.fetchStarshipInfo(this.id)
  }
}

</script>