<template>
  <div class="people">
    <Table
      :headers="headers"
      :data="$store.getters.getPeople"
      page="people"
      caption="People"
      routeName="person"
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
        { key: "birthYear", name: "Birth Year" },
        { key: "gender", name: "Gender" },
        { key: "hairColor", name: "Hair Color" },
        { key: "height", name: "Height" },
        { key: "created", name: "Created" },
      ],
    };
  },
  created() {
    this.$store.dispatch("fetchPeople");
  },
};
</script>
<style></style>
