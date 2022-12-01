<template>
  <BaseSections mod="md">
    <Logo></Logo>
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

export default {
  name: 'Index',
  components: {
    SectionCategories,
    BaseSections,
    SectionActual,
    SectionHero,
  }
}
</script>

<style lang="scss">

</style>
