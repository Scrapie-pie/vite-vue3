<template>
  <header class="header">
    <BaseSections>
      <SectionTop />
      <SectionHeader />
    </BaseSections>
  </header>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import InputSearch from "@/components/InputSearch.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseBlocks from "@/components/BaseBlocks.vue";
import SectionTop from "@/components/SectionTop.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import BaseSections from "@/components/BaseSections.vue";
export default {
  name: 'TheHeader',
  components: {
    BaseSections,
    SectionHeader,
    BaseContainer,
    InputSearch,
    BaseButton,
    SectionTop,
    BaseBlocks
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
</style>
