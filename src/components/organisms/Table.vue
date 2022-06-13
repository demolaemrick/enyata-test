<template>
  <table>
    <caption class="table-caption">
      {{
        caption
      }}
    </caption>
    <thead>
      <tr>
        <th style="width: 2%">
          <input type="checkbox" />
        </th>
        <th v-for="(header, i) in headers" :key="i">{{ header.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in data" :key="i">
        <td>
          <input type="checkbox" />
        </td>
        <td
          v-for="(header, i) in headers"
          :key="i"
          @click="navigate(item.id)"
          :data-label="header.name"
        >
          {{ item[header.key] }}
        </td>
        <td class="action-btn">
          <Button type="button">Select</Button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Button from "@/components/atoms/Button";
export default {
  components: {
    Button,
  },
  props: ["headers", "data", "caption", "routeName"],
  methods: {
    navigate(id) {
      this.$router.push({ name: this.routeName, params: { id } });
    },
  },
};
</script>
<style scoped>
.table-caption {
  color: #a4a7b7;
  font-size: 1rem;
  line-height: 24px;
  text-align: left;
  margin-bottom: 31px;
}
table {
  width: 100%;
  border: 1px solid rgba(164, 167, 183, 0.4);
  border-radius: 4px;
  border-spacing: 0;
  table-layout: fixed;
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
  font-size: 1rem;
  line-height: 24px;
}
th,
td {
  padding: 30px;
  overflow-wrap: break-word;
}
td {
  color: #303b54;
  line-height: 24px;
  text-align: center;
  font-weight: 500;
}
td:not(:nth-child(7)) {
  text-transform: capitalize;
}

.action-btn {
  display: none;
}

@media screen and (max-width: 992px) {
  table {
    border: none;
  }
  table thead {
    display: none;
  }

  table,
  tbody,
  tr,
  td {
    display: block;
  }
  table tr {
    margin-bottom: 15px;
    box-shadow: none;
    border: 1px solid rgba(164, 167, 183, 0.4);
  }
  table tr:hover {
    background: transparent;
      box-shadow: 0px 0px 30px rgba(13, 47, 161, 0.07);

  }
  table tbody tr td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  table tr td:first-of-type {
    display: none;
  }

  table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    padding-left: 15px;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }

  .action-btn {
    display: block;
  }
}
</style>
