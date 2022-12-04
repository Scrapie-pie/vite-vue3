<template>
  <button :class="classArray">
    <BaseIcon v-if="iconLeft" :icon="iconLeft"/>
    <slot></slot>
    <BaseIcon v-if="iconRight" :icon="iconRight"/>
  </button>
</template>

<script setup>
import { ref, computed } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  mod: {
    type: String,
    validator: (value) => ['primary', 'secondary'].includes(value),
    default: 'primary'
  },
  iconLeft: String,
  iconRight: String,
});

const classArray = ref(['button']);
if (props.mod) classArray.value.push(`button--${props.mod}`);
</script>

<style lang="scss">
.button {
  $self: &;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  position: relative;
  font-size: 14px;
  padding: 12px 15px;
  border-radius: 3px;
  font-weight: 700;
  transition: .25s ease-out;

  &--primary {
    $bg: get-var(color, primary);
    background-color: $bg;
    &:hover {
      background-color: darken($bg, 10%);
    }
  }
  &--secondary {
    $bg: get-var(color, white);
    background-color: $bg;
    border: 1px solid get-var(color, border);
    &:hover {
      background-color: darken($bg, 5%);
    }
  }
}
</style>
