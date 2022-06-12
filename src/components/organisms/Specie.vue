<template>
 <Movie>
    <template #image>
      <img src="../../assets/wookie.png" alt="star war movie" />
    </template>
    <template v-if="$store.state.specie" #content>
      <h1>{{ $store.state.specie.name }}</h1>
      <p>Designation: {{ $store.state.specie.designation }}</p>
      <p>Language: {{ $store.state.specie.language }}</p>
      <p>Eye Colors: {{ $store.state.specie.eye_colors }}</p>
      <p>Average Lifespan: {{ $store.state.specie.average_lifespan }}</p>
    </template>
  </Movie>
</template>
<script>
import Movie from "@/components/molecules/Movie";
export default {
  components: { Movie },
   mounted() {
    this.$store.dispatch("fetchSpecie", this.$route.params.id);
  },
};
</script>
<style></style>
