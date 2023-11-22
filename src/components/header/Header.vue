<script lang="ts">
import {defineComponent} from 'vue'
import LogoInfo from "./LogoInfo.vue";
import ButtonCart from "./ButtonCart.vue";

export default defineComponent({
  name: "Header",
  components: {ButtonCart, LogoInfo}
})
</script>

<template>
  <div class="header d-flex justify-space-between align-center">
    <div>
      <LogoInfo />
    </div>
    <div>
      <ButtonCart />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .header {
    padding: 52px 0 35px;
    border-bottom: 1px solid #F6F6F6;
  }
</style>