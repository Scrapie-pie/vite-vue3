<template>
  <BaseSections mod="md">
    <SectionHero />
    <SectionActual />
    <SectionCategories />
    <SectionCategories />
  </BaseSections>
</template>

<script>
import SectionHero from "@/components/SectionHero.vue";
import SectionActual from "@/components/SectionActual.vue";
import BaseSections from "@/components/BaseSections.vue";
import SectionCategories from "@/components/SectionCategories.vue";
import BaseButton from "@/components/BaseButton.vue";
import TestCssModule from "@/components/TestCssModule.vue";
import BaseImage from "@/components/BaseImage.vue";

export default {
  name: 'Index',
  components: {
    BaseImage,
    TestCssModule,
    BaseButton,
    SectionCategories,
    BaseSections,
    SectionActual,
    SectionHero,
  }
}
</script>

<style lang="scss">

</style>
