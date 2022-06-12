<template>
  <Movie>
    <template #image>
      <img src="../../assets/death-star.png" alt="star war movie" />
    </template>
    <template v-if="$store.state.ship" #content>
      <h1>{{ $store.state.ship.name }}</h1>
      <p>Model: {{ $store.state.ship.model }}</p>
      <p>Passenger: {{ $store.state.ship.passengers }}</p>
      <p>Pilots: Dior, Kingley, Jamal</p>
    </template>
    <!-- this condition is to show default content for the page as starship/id might return 404 error from swapi api sometimes -->
    <template v-else #content>
      <h1>Death Star</h1>
      <p>Model: DS-1 Orbital Battle Station</p>
      <p>Passengers: 22</p>
      <p>Pilots: Dior, Kingley, Jamal</p>
    </template>
  </Movie>
</template>
<script>
import Movie from "@/components/molecules/Movie";
export default {
  components: { Movie },
  created() {
    this.$store.dispatch("fetchStarship", this.$route.params.id);
  },
};
</script>
<style></style>
