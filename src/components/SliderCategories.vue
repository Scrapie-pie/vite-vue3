<template>
  <div class="slider-categories">
    <SliderCategoriesTabs />
    <div class="slider-categories__items">
      <SliderCategoriesItem v-for="i of 5" :key="i"/>
    </div>
  </div>
</template>

<script setup>
import SliderCategoriesTabs from "@/components/SliderCategoriesTabs.vue";
import SliderCategoriesItem from "@/components/SliderCategoriesItem.vue";
</script>

<style lang="scss">
.slider-categories {

  &__items {
    @include flex-it(row, 10px);


  }
}
</style>
