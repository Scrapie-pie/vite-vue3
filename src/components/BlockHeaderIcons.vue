<template>
<!--  <div class="block-header-icons">-->
<!--    <BaseIcon icon="person" init-font-size="24px" />-->
<!--    <BaseIcon icon="like" init-font-size="24px" />-->
<!--    <BaseIcon icon="basket" init-font-size="24px" />-->
<!--  </div>-->
  <BaseFlex space="micro-xxl">
    <BaseIcon icon="person" />
    <BaseIcon icon="like" />
    <BaseIcon icon="basket" init-font-size="24px" />
  </BaseFlex>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";
import BaseFlex from "@/components/BaseFlex.vue";
</script>

<style lang="scss">
//.block-header-icons {
//  display: inline-flex;
//  align-items: center;
//  justify-content: space-between;
//  gap: 30px;
//}
</style>
