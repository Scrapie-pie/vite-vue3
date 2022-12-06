<template>
  <div id="app">
    <TheHeader />
    <NavigationSub />
    <TheMain>
      <router-view />
    </TheMain>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheMain from "@/components/TheMain.vue";
import NavigationSub from "@/components/NavigationSub.vue";


export default {
  name: 'App',
  components: {
    NavigationSub,
    TheHeader,
    TheMain
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';
#app {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
}
</style>
