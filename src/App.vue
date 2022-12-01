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
@import './assets/scss/style';
#app {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

 .container,
  *[class$="_container"],
 *[class$="--container"],
 *[class$="__container"] {
   @include container;
 }

  .global {
    &_font-size {
      @for $i from 1 through 6 {
        $color: get-var(color, black);
        $weight: 700;
        $line-height: 1.22em;
        //$margin-bottom: get-var(space, xs);

        &_h#{$i} {
          @include h($i, $color, $weight: $weight, $margin-bottom: 0);
          line-height: $line-height;
        }
      }

    }
    &_color {
      @each $key, $value in map-get($variables, color) {
        &_#{$key} {
          color: var(--color_#{$key});
        }
      }
    }
  }
}
</style>
