<template>
  <BaseSection class="section-categories">
    <h3>Актуальное</h3>
    <SliderCategories />
  </BaseSection>
</template>

<script setup>
import BaseSection from "@/components/BaseSection.vue";
import SliderCategories from "@/components/SliderCategories.vue";
</script>

<style lang="scss">
.section-categories {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
