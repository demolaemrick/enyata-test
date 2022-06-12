<template>
  <Movie>
    <template #image>
      <img src="../../assets/shank.png" alt="star war movie" />
    </template>
    <template v-if="$store.state.person" #content>
      <h1>{{ $store.state.person.name }}</h1>
      <p>Gender: {{ $store.state.person.gender }}</p>
      <p>Year of birth: {{ $store.state.person.birth_year }}</p>
      <p>Height: {{ $store.state.person.height }}CM</p>
    </template>
  </Movie>
</template>
<script>
import Movie from "@/components/molecules/Movie";
export default {
  components: { Movie },
  mounted() {
    this.$store.dispatch("fetchPerson", this.$route.params.id);
  },
};
</script>
<style></style>
