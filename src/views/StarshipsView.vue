<template>
  <div class="starships">
    <Table
      :headers="headers"
      :data="$store.getters.getStarships"
      page="starships"
      caption="Starship"
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
        { key: "model", name: "Model", width: "12%" },
        { key: "class", name: "Class", width: "12%" },
        { key: "passenger", name: "Passenger", width: "12%" },
        { key: "length", name: "Length", width: "12%" },
        { key: "character", name: "Character", width: "12%" },
      ],
    };
  },
  created() {
    this.$store.dispatch("fetchStarships");
  },
};
</script>
<style></style>
