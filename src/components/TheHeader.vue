<template>
  <header class="header">
    <BaseSections>
      <SectionTop />
      <SectionHeader />
    </BaseSections>
  </header>
</template>

<script setup>
import SectionTop from "@/components/SectionTop.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import BaseSections from "@/components/BaseSections.vue";
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
