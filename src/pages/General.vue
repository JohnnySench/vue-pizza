<script lang="ts">
import {defineComponent} from 'vue'
import FilterRow from "../components/filter/FilterRow.vue";
import Card from "../components/Card.vue";
import axios from "axios";

export default defineComponent({
  name: "General",
  components: {Card, FilterRow},
  data() {
    return {
      loading: true,
      dataPizza: []
    }
  },
  async mounted() {
    await axios.get('http://localhost:3000/pizza')
        .then(response => {
          this.dataPizza = response.data
          this.loading = false
        })
  }
})
</script>

<template>
  <FilterRow />
  <Card class="fatak" :data-pizza="dataPizza" :loading="loading"/>
</template>

<style scoped lang="scss">
  .fatak {
    height: 60vh;
    overflow-y: scroll;
  }
</style>