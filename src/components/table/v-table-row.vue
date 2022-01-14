<template>
  <div class="v-table-row">
    <div class="row row_date">{{ row_data.date }}</div>
    <div class="row row_name">{{ row_data.name }}</div>
    <div class="row row_number">{{ row_data.number }}</div>
    <div class="row row_distance">{{ row_data.distance + " км" }}</div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.row {
  text-align: center;
  flex-basis: 25%;
}

.v-table-row {
  display: flex;
  justify-content: space-around;
}
</style>
