<template>
  <div class="v-table">
    <v-table-sort @searchTable="searchTable" />
    <div class="table_header">
      <p>Дата</p>
      <p @click="sortByName">Название</p>
      <p @click="sortByNumber">Количество</p>
      <p @click="sortByDistance">Растояние</p>
    </div>
    <div class="table_body">
      <v-table-row
        v-for="row in paginatedTable"
        :key="row.id"
        :row_data="row"
      />
    </div>
    <div class="v-table_pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
        :class="{ page_selected: page === pageNumber }"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import TestDataService from "../../services/TestDataService";
import vTableRow from "../table/v-table-row.vue";
import VTableSort from "./v-table-sort.vue";
export default {
  name: "v-table",
  components: { vTableRow, VTableSort },
  data() {
    return {
      tableData: [],
      tablePerPage: 10,
      filtredTable: [],
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.filtredTable.length / 10);
    },
    paginatedTable() {
      let from = (this.pageNumber - 1) * this.tablePerPage;
      let to = from + this.tablePerPage;
      return this.filtredTable.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.filtredTable.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByNumber() {
      this.filtredTable.sort((a, b) => a.number - b.number);
    },

    sortByDistance() {
      this.filtredTable.sort((a, b) => a.distance - b.distance);
    },

    searchTable(data) {
      data.condition === "more" &&
        ((data.sortTable === "number" &&
          (this.filtredTable = this.tableData.filter(
            (item) => item.number > data.textFiltredTable
          ))) ||
          (data.sortTable === "distance" &&
            (this.filtredTable = this.tableData.filter(
              (item) => item.distance > data.textFiltredTable
            ))));
      data.condition === "less" &&
        ((data.sortTable === "number" &&
          (this.filtredTable = this.tableData.filter(
            (item) => item.number < data.textFiltredTable
          ))) ||
          (data.sortTable === "distance" &&
            (this.filtredTable = this.tableData.filter(
              (item) => item.distance < data.textFiltredTable
            ))));
      data.condition === "equals" &&
        ((data.sortTable === "number" &&
          (this.filtredTable = this.tableData.filter(
            (item) => item.number == data.textFiltredTable
          ))) ||
          (data.sortTable === "distance" &&
            (this.filtredTable = this.tableData.filter(
              (item) => item.distance == data.textFiltredTable
            ))));
      data.textFiltredTable === "" && (this.filtredTable = this.tableData);
    },

    getTestDb() {
      TestDataService.getAll()
        .then((response) => {
          this.tableData = response.data;
          this.filtredTable = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getTestDb();
  },
};
</script>

<style lang="scss">
.v-table {
  max-width: 1200px;
  margin: 0 auto;
}
.table_header {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.table_header p {
  cursor: pointer;
  flex-basis: 25%;
  text-align: center;
}

.v-table_pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.page {
  padding: 8px;
  border: solid 1px black;
  margin-right: 10px;
}

.page:hover {
  background-color: gold;
  cursor: pointer;
}
.page_selected {
  background-color: gold;
}
</style>
