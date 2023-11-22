<script lang="ts">
import Header from "./components/header/Header.vue";

export default {
  name: 'App',
  components: {Header}
}
</script>

<template>
  <Header/>
  <RouterView/>
</template>

<style lang="scss" scoped>

</style>
