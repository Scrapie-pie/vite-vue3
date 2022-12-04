<template>
  <component :is="tag" :href="href" class="link">
    <slot></slot>
  </component>
</template>

<script setup>
const props = defineProps({
  tag:  { type: String, default: 'a' },
  href: { type: String, default: '#' },
});
</script>

<style lang="scss">
.link {
  //@include flex-it(row, 15px, true);
  //align-items: center;
  //color: get-var(color, link);
}
</style>
