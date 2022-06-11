<template>
    <div class="overview">
      <div class="overview__stats">
        <Card title="Films" iconColor="#A9FFE0" />
        <Card title="Starship" />
        <Card title="People" iconColor="#FFA9EC" />
        <Card title="Species" iconColor="#FDFFA9" />
      </div>
      <Table :headers="headers" :data="tableData" page="overview" />
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
        { key: "title", name: "Film Title", width: "26%" },
        { key: "releaseDate", name: "Release Date", width: "12%" },
        { key: "director", name: "Director", width: "12%" },
        { key: "producer", name: "Producer", width: "12%" },
        { key: "episodeId", name: "Episode ID", width: "12%" },
        { key: "character", name: "Character", width: "12%" },
      ],
      tableData: [
        {
          title: "MoonLight",
          releaseDate: "9/18/20",
          director: "Esther Howard",
          producer: "Paracetamol",
          episodeId: "4",
          character: "https://swapi.dev/api/people",
        },
        {
          title: "MoonLight",
          releaseDate: "9/18/20",
          director: "Esther Howard",
          producer: "Paracetamol",
          episodeId: "4",
          character: "https://swapi.dev/api/people",
        },
      ],
    };
  },
};
</script>

<style scoped>
.overview {
  padding: 0 40px 46px;
}
.overview__stats {
  display: flex;
  flex: 1 0 calc (25% -10px);
  gap: 3.4rem;
  margin-bottom: 4.5rem;

  /* background-color: red; */
}
</style>
