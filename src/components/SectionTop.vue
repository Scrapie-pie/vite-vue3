<template>
  <BaseSection class="section-top">
    <div class="section-top__wrapper">
      <span>Бесплатная доставка в любую точку Беларуси при сумме выкупа заказа от 50 BYN. Бесплатный самовывоз из фирменных магазинов</span>
<!--      <BaseIconLabel icon="location">Минск</BaseIconLabel>-->
      <BaseFlex space="xxl">
        <BaseIcon icon="location" />
        Минск
      </BaseFlex>

<!--      <BaseIconLabel icon="location">Минск</BaseIconLabel>-->

    </div>
  </BaseSection>
</template>

<script>
import BaseIconLabel from "@/components/BaseIconLabel.vue";
import BaseSection from "@/components/BaseSection.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseFlex from "@/components/BaseFlex.vue";
export default {
  name: 'SectionTop',
  components: {
    BaseFlex,
    BaseIcon,
    BaseSection,
    BaseIconLabel,
  }
}
</script>

<style lang="scss">
.section-top {
  background-color: #ffeffc;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }
}
</style>
