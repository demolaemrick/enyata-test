<template>
  <div class="table-container">
    <table>
      <caption class="table-title">
        {{
          caption
        }}
      </caption>
      <tbody>
        <tr>
        <th style="width: 2%">
          <input type="checkbox" />
        </th>
        <th v-for="(header, i) in headers" :key="i">{{ header.name }}</th>
      </tr>
      <tr v-for="(item, i) in data" :key="i">
        <td>
          <input type="checkbox" />
        </td>
        <td v-for="(header, i) in headers" :key="i" @click="navigate(item.id)">
          {{ item[header.key] }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["headers", "data", "caption", "routeName"],
  methods: {
    navigate(id) {
      this.$router.push({ name: this.routeName, params: { id } });
    },
  },
};
</script>
<style scoped>
.table-container {
  overflow-x: auto;
}
.table-title {
  color: #a4a7b7;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  margin-bottom: 31px;
}
table {
  width: 100%;
  border: 1px solid rgba(164, 167, 183, 0.4);
  border-radius: 4px;
  border-spacing: 0;
}
tr {
  -webkit-box-shadow: 0px 1px 0px 0px rgba(229, 229, 229, 1);
  -moz-box-shadow: 0px 1px 0px 0px rgba(229, 229, 229, 1);
  box-shadow: 0px 1px 0px 0px rgba(229, 229, 229, 1);
}
tr:hover:not(:first-of-type) {
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(13, 47, 161, 0.07);
  border-radius: 4px;
}

th {
  font-weight: 500;
  color: #a4a7b7;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
}
th,
td {
  padding: 30px;
}
td {
  color: #303b54;
  line-height: 24px;
  text-align: center;
  font-weight: 500;

}
td:not(:last-of-type){
  text-transform: capitalize;
}
</style>
