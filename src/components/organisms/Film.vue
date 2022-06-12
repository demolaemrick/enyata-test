<template>
  <Movie>
    <template #image>
      <img src="../../assets/cover.png" alt="star war movie" />
    </template>
    <template v-if="$store.state.film" #content>
      <h1>{{ $store.getters.getFilm.title }}</h1>
      <p>Director: {{ $store.getters.getFilm.director }}</p>
      <p>Producer: {{ $store.getters.getFilm.producer }}</p>
      <p>Release Date: {{ $store.getters.getFilm.release_date }}.</p>
    </template>
  </Movie>
</template>
<script>
import Movie from "@/components/molecules/Movie";
export default {
  components: { Movie },
  mounted() {
    this.$store.dispatch("fetchFilmById", this.$route.params.id);
  },
};
</script>
<style></style>
