<template>
  <div class="block-actual">
    <div class="block-actual__preview">
      <BaseImage :src="imageSrc" class="block-actual__image"/>
    </div>
    <span class="block-actual__name">{{ name }}</span>
  </div>
</template>

<script setup>
import BaseImage from "@/components/BaseImage.vue";

const props = defineProps({
  name: String,
  imageSrc: String,
})
</script>

<style lang="scss">
.block-actual {
  @include flex-it(column, 5px);
  align-items: center;
  justify-content: center;

  &__preview {

  }

  &__image {
    max-width: 152px;
    border-radius: 50%;
    filter: brightness(90%);
  }
}
</style>
