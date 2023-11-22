<script lang="ts">
import {defineComponent} from 'vue'
import Icon from "../icons/icon.vue";

export default defineComponent({
  name: "ButtonCart",
  components: {Icon},
  props: {
    totalCost: {
      type: Number,
      required: false,
      default: 520
    },
    countItem: {
      type: Number,
      required: false,
      default: 3
    }
  }
})
</script>

<template>
  <div>
    <v-btn
      color="#FE5F1E"
      size="x-large"
      rounded="xl"
    >
      <template #prepend>
         {{totalCost}} ₽
      </template>
      |
      <template #append>
        <Icon :type-icon="'cart'"/> {{countItem}}
      </template>
    </v-btn>
  </div>
</template>

<style scoped lang="scss">

</style>