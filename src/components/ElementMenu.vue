<template>
  <div class="element-menu">
    <div class="element-menu__wrapper" @click="onClick">
      <ElementMenuIcon :is-opened="isOpened" />
      <span>Каталог</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ElementMenuIcon from "@/components/ElementMenuIcon.vue";

const emit = defineEmits(['clicked']);
let isOpened = ref(false);
const onClick = (event) => {
  isOpened = !isOpened;
  emit('clicked', isOpened);
};
</script>

<style lang="scss">
.element-menu {
  display: inline-flex;
  align-items: center;
  &__wrapper {
    display: inline-flex;
    align-items: center;
    //justify-content: center;
    gap: 3px;
    cursor: pointer;
  }

}
</style>
