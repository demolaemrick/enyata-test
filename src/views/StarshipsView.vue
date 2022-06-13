<template>
  <div class="starships">
    <Table
      :headers="headers"
      :data="$store.getters.getStarships"
      routeName="starship"
      caption="Starships"
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
        { key: "name", name: "Name" },
        { key: "model", name: "Model" },
        { key: "class", name: "Class" },
        { key: "passenger", name: "Passenger" },
        { key: "length", name: "Length" },
        { key: "character", name: "Character" },
      ],
    };
  },
  created() {
    this.$store.dispatch("fetchStarships");
  },
};
</script>
<style></style>
