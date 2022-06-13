<template>
  <div class="species">
    <Table
      :headers="headers"
      :data="$store.getters.getSpecies"
      routeName="specie"
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
        { key: "name", name: "Name" },
        { key: "classification", name: "Classification" },
        { key: "eyeColors", name: "Eye Colors" },
        { key: "hairColor", name: "Hair Color" },
        { key: "height", name: "Height" },
        { key: "created", name: "Character" },
      ],
    };
  },
  created() {
    this.$store.dispatch("fetchSpecies");
  },
};
</script>
<style></style>
