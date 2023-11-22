<script lang="ts">
import {defineComponent} from 'vue'
import Icon from '../icons/icon.vue'

export default defineComponent({
  name: "LogoInfo",
  components: {Icon}
})
</script>

<template>
  <div class="d-flex align-center">
    <Icon :type-icon="'pizza'"/>
    <div class="logo-info d-flex flex-column">
      <h2 class="logo-title ">Vue pizza</h2>
      <span class="icon-desc">самая вкусная пицца во вселенной</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .logo-title {
    padding-bottom: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 24px;
  }
  .logo-info {
    margin-left: 17px;
  }
  .icon-desc {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #7b7b7b;
  }
</style>