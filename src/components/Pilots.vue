<template>
  <div class="pilot-container">
    <div class="pilot-top">
      <h2>PILOTS</h2>
    </div>
    <div v-for="(pilot, index) in pilots" :key="index">
      <h4>{{ pilot.name }}</h4>
      <div class="pilot-detail">
        <div>
          <p><span>Height: </span>{{ pilot.height }}</p>
          <p><span>Mass: </span>{{ pilot.mass }}</p>
          <p><span>Hair color: </span>{{ pilot.hair_color }}</p>
          <p><span>Skin color: </span>{{ pilot.skin_color }}</p>
        </div>
        <div>
          <p><span>Eye color: </span>{{ pilot.eye_color }}</p>
          <p><span>Birth Year: </span>{{ pilot.birth_year }}</p>
          <p><span>Gender: </span>{{ pilot.gender }}</p>
        </div>
      </div>
    </div>
    <div v-if="!pilots.length">
      <p>There are no pilots in our database</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pilots',
  props: ['pilots'],
}
</script>

<style scoped>
.pilot-container {
  width: 500px;
  margin: 10px auto;
  background-color: #1D1E1Fcc;
  border-radius: 5px;
  padding-bottom: 5px;
}

.pilot-top {
  border-bottom: 1px solid #AAAAAA;
  padding: 10px;
}

.pilot-container h2 {
  margin: 5px 0;
}

.pilot-container h4 {
  margin-bottom: 0;
  color: #ffffff;
  text-transform: uppercase;
}

.pilot-detail {
  display: flex;
  margin: 0 40px;
  text-align: left;
  gap: 100px;
}
</style>