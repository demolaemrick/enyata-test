<template>
  <div class="overview">
    <div class="overview__stats">
      <Card title="Films" iconColor="#A9FFE0" />
      <Card title="Starship" />
      <Card title="People" iconColor="#FFA9EC" />
      <Card title="Species" iconColor="#FDFFA9" />
    </div>
    <Table
      :headers="headers"
      :data="$store.getters.getFilms"
      routeName="movie"
      caption="Films"
    />
  </div>
</template>
<script>
import Card from "@/components/atoms/Card";
import Table from "@/components/organisms/Table";
export default {
  components: { Card, Table },
  data() {
    return {
      headers: [
        { key: "title", name: "Film Title"},
        { key: "releaseDate", name: "Release Date"},
        { key: "director", name: "Director"},
        { key: "producer", name: "Producer"},
        { key: "episodeId", name: "Episode ID"},
        { key: "character", name: "Character"},
      ],
    };
  },
  created() {
    this.$store.dispatch("fetchFilms");
  },
};
</script>

<style>
.overview__stats {
  display: flex;
  gap: 3.4rem;
  margin-bottom: 4.5rem;
}
.overview__stats .card {
  flex: 1 0 208px;
}
</style>
