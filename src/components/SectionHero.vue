<template>
  <section class="section-hero">
    <div class="section-hero__container">
      <BaseImage file-name="hero.jpg" class="section-hero__image"/>
    </div>
  </section>
</template>

<script setup>
import BaseImage from "@/components/BaseImage.vue";
</script>

<style lang="scss">
.section-hero {
  &__image {
    border-radius: 10px;
  }
}
</style>
