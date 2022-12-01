<template>
  <section class="section-hero">
    <div class="section-hero__container">
      <BaseImage file-name="hero.jpg" class="section-hero__image"/>
    </div>
  </section>
</template>

<script>
import BaseImage from "@/components/BaseImage.vue";
export default {
  name: 'SectionHero',
  components: {
    BaseImage
  }
}
</script>

<style lang="scss">
.section-hero {
  &__image {
    border-radius: 10px;
  }
}
</style>
