<template>
  <nav class="navigation-sub">
    <div class="navigation-sub__container">
      <nav class="navigation-sub__routes">
        <span>SALE</span>
        <span>Акции</span>
        <span>Конкурс</span>
        <router-link :to="{name:'ui'}">ui</router-link>
        <span>🎄Новый год</span>
      </nav>
      <nav class="navigation-sub__routes">
        <span>Наши магазины</span>
        <span>Доставка</span>
      </nav>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss">
.navigation-sub {
  padding-top: 20px;
  margin-bottom: 30px;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__routes {
    @include flex-it(row, 25px);
  }
}
</style>
