<template>
  <BaseLabel :name="label">
    <select
      class="base-select"
      @change="$emit('change', $event.target.value)"
    >
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
  </BaseLabel>
</template>

<script setup>
import BaseLabel from './BaseLabel.vue';
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  props: {
    label: String,
    options: {
      type: Array,
      required: true
    }
  },
  model: {
    prop: 'selected',
    event: 'change'
  },
  components: {
    BaseLabel
  }
}
</script>

<style lang="scss">
@import "../assets/scss/common";
.base-select {
  @extend .common-input;
  padding: 6px 10px;
}
</style>
