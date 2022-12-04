<template>
  <div class="element-menu-icon" :class="{ 'element-menu-icon_opened': isOpened }" @click="">
    <span class="element-menu-icon__line"></span>
    <span class="element-menu-icon__line"></span>
    <span class="element-menu-icon__line"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpened: { type: Boolean, default: false }
});
const emit = defineEmits(['open'])
</script>

<style lang="scss">
.element-menu-icon {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: 15px;
  cursor: pointer;

  &_opened & {
    &__line {
      background-color: #F1BD45;
    }
  }

  &__line {
    width: 100%;
    height: 1px;
    background-color: black;
  }
}
</style>
