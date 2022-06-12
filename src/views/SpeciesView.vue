<template>
  <div class="species">
    <Table
      :headers="headers"
      :data="$store.getters.getSpecies"
      page="species"
      caption="Species"
    />
  </div>
</template>
<script>
import Table from "@/components/organisms/Table";

export default {
  components: { Table },

  data() {
    return {
      headers: [
       { key: "name", name: "Name", width: "26%" },
        { key: "classification", name: "Classification", width: "12%" },
        { key: "eyeColors", name: "Eye Colors", width: "12%" },
        { key: "hairColor", name: "Hair Color", width: "12%" },
        { key: "height", name: "Height", width: "12%" },
        { key: "created", name: "Character", width: "12%" },
      ],
    };
  },
  created() {
    this.$store.dispatch("fetchSpecies");
  },
};
</script>
<style></style>
