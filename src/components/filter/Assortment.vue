<script lang="ts">
import {defineComponent} from 'vue'
import Icon from "../icons/icon.vue";

export default defineComponent({
  name: "Assortment",
  data() {
    return {
      selectedSort: 'популярности'
    }
  },
  components: {Icon},
  computed: {
    sortInfo() {
      return [
        {
          title: 'популярности',
          action: (value: string) => this.changeSelectedSort(value)
        },
        {
          title: 'цене',
          action: (value: string) => this.changeSelectedSort(value)
        },
        {
          title: 'алфавиту',
          action: (value: string) => this.changeSelectedSort(value)
        },
      ]
    }
  },
  methods: {
    changeSelectedSort(value: string) {
      this.selectedSort = value;
    }
  },
})
</script>

<template>
  <div class="filter-sort">
    <Icon class="cursor-pointer" :type-icon="'chevron'"/>
    <span class="filter-sort_text">Сортировка по:</span>
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <div
            v-bind="props"
            class="selected-sort"
        >
          {{ selectedSort }}
        </div>
      </template>
      <v-list rounded="lg">
        <v-list-item
            class="selected-sort_list"
            v-for="(item, index) in sortInfo"
            :key="index"
        >
          <v-list-item-title
              class="cursor-pointer"
              @click="item.action(item.title)"
          >
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped lang="scss">
.filter-sort {
  display: flex;
  align-items: center;
}

.filter-sort_text {
  display: inline-block;
  margin-left: 7px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
}
.selected-sort_list {
  transition: all .2s ease-in-out;
  &:hover {
    background-color: rgba(#FE5F1E, .05);
    color: #FE5F1E;
  }
}

.selected-sort {
  cursor: pointer;
  margin-left: 8px;
  color: #FE5F1E;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  border-bottom: 1px dotted #FE5F1E;
}
</style>