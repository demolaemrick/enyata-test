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
  </Movie>
</template>
<script>
import Movie from "@/components/molecules/Movie";
export default {
  components: { Movie },
  mounted() {
    this.$store.dispatch("fetchStarship", this.$route.params.id);
  },
};
</script>
<style></style>
