<template>
  <img v-if="!isBg" :src="resolveSrc" :alt="alt" class="image">
  <div v-else :style="{ backgroundImage: 'url(' + resolveSrc + ')' }" class="image" />
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  //fileName: String,
  alt: { type: String, default: '' },
  isBg: { type: Boolean, default: false },
  src: String,
});
const resolveSrc = computed(() => props.src); // dev | prod
</script>

<style lang="scss">
img.image {
  width: 100%;
}
div.image {
  background: center/cover no-repeat;
}
</style>
