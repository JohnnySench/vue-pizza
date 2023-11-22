<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Categories",
  data() {
    return {
      categories: 'Все'
    }
  },
  methods: {
    getSelectedCategories(value: string) {
      this.categories = value
    }
  },
  computed: {
    filterInfo() {
      return [
        {
          title: 'Все',
          action: (value:string) => this.getSelectedCategories(value)
        },
        {
          title: 'Мясные',
          action: (value:string) => this.getSelectedCategories(value)
        },
        {
          title: 'Вегетарианская',
          action: (value:string) => this.getSelectedCategories(value)
        },
        {
          title: 'Гриль',
          action: (value:string) => this.getSelectedCategories(value)
        },
        {
          title: 'Острые',
          action: (value:string) => this.getSelectedCategories(value)
        },
        {
          title: 'Закрытые',
          action: (value:string) => this.getSelectedCategories(value)
        },
      ]
    }
  }
})
</script>

<template>
  <div class="filter-categories d-flex">
    <div
        v-for="(btn, index) in filterInfo"
        :key="btn.title">
      <v-btn
          size="large"
          variant="tonal"
          rounded="xl"
          :text="btn.title"
          class="btn-filter uppercase-disabled"
          :class="{'active': categories === btn.title}"
          @click="btn.action(btn.title)"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .active {
    background-color: black;
    color: white;
    transition: all .2s ease-in-out;
  }
  .filter-categories {
    grid-gap: 9px;
  }
  .btn-filter {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }
</style>