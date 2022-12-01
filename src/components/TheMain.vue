<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import InputSearch from "@/components/InputSearch.vue";
import BaseButton from "@/components/BaseButton.vue";
import VSectionTop from "@/components/SectionTop.vue";
export default {
  name: 'TheMain',
  components: {
    BaseContainer,
    InputSearch,
    BaseButton,
    VSectionTop
  }
}
</script>

<style lang="scss">
.main {
  flex-grow: 1;
}
</style>
