<template>
  <section class="section-header">
    <div class="section-header__container">
      <ElementMenu />
      <router-link to="/">
        <BaseIcon icon="logo" />
      </router-link>

      <InputSearch />
      <BlockHeaderIcons />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ElementMenu from "@/components/ElementMenu.vue";
import BlockHeaderIcons from "@/components/BlockHeaderIcons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import InputSearch from "@/components/InputSearch.vue";
const searchQuery = ref('');
</script>

<style lang="scss">
.section-header {
  padding: 30px 0;
  border-bottom: 1px solid black;
  &__container {
    display: grid;
    grid-template-columns: minmax(auto, 150px) auto 1fr auto;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
