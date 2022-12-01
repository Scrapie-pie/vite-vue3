<template>
  <BaseSection class="section-actual">
    <h3>Актуальное</h3>
    <div class="section-actual__wrapper">
      <BlockActual image-file-name="newyear.webp" name="Новый год"/>
      <BlockActual image-file-name="newyear.webp" name="Новый год"/>
      <BlockActual image-file-name="newyear.webp" name="Новый год"/>
      <BlockActual image-file-name="newyear.webp" name="Новый год"/>
      <BlockActual image-file-name="newyear.webp" name="Новый год"/>
      <BlockActual image-file-name="newyear.webp" name="Новый год"/>
      <BlockActual image-file-name="newyear.webp" name="Новый год"/>
      qwe
    </div>
  </BaseSection>
</template>

<script>
import BaseImage from "@/components/BaseImage.vue";
import BlockActual from "@/components/BlockActual.vue";
import BaseSection from "@/components/BaseSection.vue";
export default {
  name: 'SectionActual',
  components: {
    BaseSection,
    BlockActual,
    BaseImage
  }
}
</script>

<style lang="scss">
.section-actual {

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

}
</style>
