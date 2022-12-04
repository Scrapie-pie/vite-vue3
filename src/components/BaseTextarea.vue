<template>
  <textarea
    class="textarea"
    @input="$emit('input', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script setup>
const props = defineProps({
  label: String
});
const emit = defineEmits(['input']);
</script>

<style lang="scss">
.textarea {
  resize: none;
  border: none;
  outline: none;
}
</style>
