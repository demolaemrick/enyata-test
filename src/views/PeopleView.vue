<template>
  <div class="people">
    <Table
      :headers="headers"
      :data="$store.getters.getPeople"
      page="people"
      caption="People"
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
        { key: "birthYear", name: "Birth Year", width: "12%" },
        { key: "gender", name: "Gender", width: "12%" },
        { key: "hairColor", name: "Hair Color", width: "12%" },
        { key: "height", name: "Height", width: "12%" },
        { key: "created", name: "Created", width: "12%" },
      ],
    };
  },
  created() {
    this.$store.dispatch("fetchPeople");
  },
};
</script>
<style></style>
