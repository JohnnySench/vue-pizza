<script lang="ts">
import {defineComponent} from 'vue'
import Categories from "./Categories.vue";
import Assortment from "./Assortment.vue";

export default defineComponent({
  name: "FilterRow",
  components: {Assortment, Categories}
})
</script>

<template>
  <div class="filter-row">
    <Categories />
    <Assortment />
  </div>
</template>

<style scoped lang="scss">
.filter-row {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 32px 0;
}
</style>