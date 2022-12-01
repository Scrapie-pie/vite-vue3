<template>
  <BaseSection class="section-categories">
    <h3>Актуальное</h3>
    <SliderCategories />
  </BaseSection>
</template>

<script>
import BaseImage from "@/components/BaseImage.vue";
import BlockActual from "@/components/BlockActual.vue";
import BaseSection from "@/components/BaseSection.vue";
import SliderCategories from "@/components/SliderCategories.vue";
export default {
  name: 'SectionCategories',
  components: {
    SliderCategories,
    BaseSection,
    BlockActual,
    BaseImage
  }
}
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
