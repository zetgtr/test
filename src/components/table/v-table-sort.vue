<template>
  <div class="v-table-sort">
    <details>
      <summary>Сортировка</summary>
      <div class="details_box">
        <div>
          <input
            name="sortTable"
            type="radio"
            id="radio_number"
            value="number"
            v-model="sortTable"
          /><label for="radio_number">Количество</label>
        </div>
        <div>
          <input
            name="sortTable"
            type="radio"
            id="radio_distance"
            value="distance"
            v-model="sortTable"
          /><label for="radio_distance">Растояние</label>
        </div>
      </div>
    </details>
    <input
      type="number"
      class="textFiltredTable"
      v-model="textFiltredTable"
      placeholder="Количество км"
    />
    <details>
      <summary>Выбор условия</summary>
      <div class="details_box">
        <div>
          <input
            name="condition"
            type="radio"
            id="radio_more"
            value="more"
            v-model="condition"
          /><label for="radio_more">Больше</label>
        </div>
        <div>
          <input
            name="condition"
            type="radio"
            id="radio_less"
            value="less"
            v-model="condition"
          /><label for="radio_less">Меньше</label>
        </div>
        <div>
          <input
            name="condition"
            type="radio"
            id="radio_equals"
            value="equals"
            v-model="condition"
          /><label for="radio_equals">Равно</label>
        </div>
      </div>
    </details>
    <button class="button_search" @click="search">Искать</button>
  </div>
</template>

<script>
export default {
  name: "v-table-sort",
  data() {
    return {
      textFiltredTable: "",
      condition: "",
      sortTable: "",
    };
  },
  methods: {
    search() {
      this.$emit("searchTable", {
        textFiltredTable: this.textFiltredTable,
        condition: this.condition,
        sortTable: this.sortTable,
      });
    },
  },
};
</script>

<style lang="scss">
.button_search {
  margin-left: 15px;
  cursor: pointer;
}

details {
  cursor: pointer;
}

.v-table-sort {
  display: flex;
  justify-content: center;
}
.textFiltredTable {
  margin-left: 20px;
  margin-right: 5px;
}
.details_box {
  position: absolute;
  background-color: darkgray;
}
</style>
