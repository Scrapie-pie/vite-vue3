<template>
  <div class="page-ui">
    <BaseContainer>
      <BaseSections mod="md">
        <BaseH v-for="i of 6" :key="i" :level="i">Заголовок h{{i}}</BaseH>
        <br/>
        <BaseFlex space="micro-lg">
          <div class="page-ui__color"
               v-for="(value, key, index) in cssVariables.colors" :key="key"
               :style="{backgroundColor: value}">
          </div>
        </BaseFlex>
        <BaseFont :bold="true">asdsa</BaseFont>

        <form>

          <!--        <BaseInput></BaseInput>-->


          <BaseFieldTest v-model="formData.text" placeholder="Введите ваше имя">
            <template #left>
              <BaseIcon icon="logo" />
            </template>
            <template #right>
              <span>X</span>
            </template>
          </BaseFieldTest>
          <BaseFieldTest v-model="formData.text" placeholder="Введите ваше имя" placeholder-mod="popup">
            <template #left>
              <BaseIcon icon="logo" />
            </template>
            <template #right>
              <span>X</span>
            </template>
          </BaseFieldTest>
          <BaseFieldTest v-model="formData.text" placeholder="Введите ваше имя" placeholder-mod="inline">
            <template #left>
              <BaseIcon icon="logo" />
            </template>
            <template #right>
              <span>X</span>
            </template>
          </BaseFieldTest>
        </form>
      </BaseSections>

      <BaseGrid>
        <div class="page-ui__item"
             v-for="(value, key, index) in cssVariables.colors" :key="key"
             :style="{backgroundColor: value}">
        </div>
      </BaseGrid>
    </BaseContainer>

    <BaseGrid>
      <div class="page-ui__item"
           v-for="(value, key, index) in cssVariables.colors" :key="key"
           :style="{backgroundColor: value}">
      </div>
    </BaseGrid>
  </div>

</template>

<script>
import TheMain from "@/components/TheMain.vue";
import SectionCategories from "@/components/SectionCategories.vue";
import BaseSections from "@/components/BaseSections.vue";
import SectionActual from "@/components/SectionActual.vue";
import SectionHero from "@/components/SectionHero.vue";
import BlockNavigation from "@/components/NavigationSub.vue";
import TheHeader from "@/components/TheHeader.vue";
import FieldSearch from "@/components/InputSearch.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseH from "@/components/BaseH.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseFont from "@/components/BaseFont.vue";
import {getCSSVars} from "@/assets/js/scripts";
import BaseFlex from "@/components/BaseFlex.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseFieldTest from "@/components/Test/BaseFieldTest.vue";
import BaseGrid from "@/components/BaseGrid.vue";

export default {
  name: 'UI',
  data() {
    return {
      formData: {
        text: ''
      },
      cssVariables: {
        colors: getCSSVars('color')
      }
    }
  },
  methods: {

  },
  mounted() {

  },
  components: {
    BaseGrid,
    BaseFieldTest,
    BaseInput,
    BaseFlex,
    BaseContainer,
    BaseH,
    SectionCategories,
    BaseSections,
    SectionActual,
    SectionHero,
    BlockNavigation,
    TheHeader,
    FieldSearch,
    BaseIcon,
    TheMain,
    BaseFont
  }
}
</script>

<style lang="scss">
.page-ui {
  padding-bottom: 200px;
  &__colors {
    @include flex-it(row, 20px);
    flex-wrap: wrap;
  }
  &__color {
    width: 100px;
    height: 100px;
    background-color: var(--color_primary);
    border-radius: 50%;
    border: 1px solid #f8e7ff;
  }
  &__item {
    height: 200px;
  }
}
</style>
