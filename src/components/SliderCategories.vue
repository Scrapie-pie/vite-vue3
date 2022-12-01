<template>
  <div class="slider-categories">
    <SliderCategoriesTabs />
    <div class="slider-categories__items">
      <SliderCategoriesItem v-for="i of 5" :key="i"/>
    </div>
  </div>
</template>

<script>
import BlockActual from "@/components/BlockActual.vue";
import BaseSection from "@/components/BaseSection.vue";
import SliderCategoriesTabs from "@/components/SliderCategoriesTabs.vue";
import SliderCategoriesItem from "@/components/SliderCategoriesItem.vue";
export default {
  name: 'SliderCategories',
  components: {
    SliderCategoriesItem,
    SliderCategoriesTabs,
    BaseSection,
    BlockActual,
  }
}
</script>

<style lang="scss">
.slider-categories {

  &__items {
    @include flex-it(row, 10px);


  }
}
</style>
