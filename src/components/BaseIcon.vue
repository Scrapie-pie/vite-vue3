<template>
  <i :class="['icon', `icon-${icon}`, {classSub}]" :style="inlineSize">
    <BaseSvg2 :icon="icon" />
  </i>
</template>

<script>
import BaseSvg from "@/components/BaseSvg.vue";
import BaseSvg2 from "@/components/BaseSvg2.vue";
export default {
  name: 'BaseIcon',
  inheritAttrs: false,
  data() {
    return {
      sizes: {
        location: {
          default: '19px',
          circle: '24px'
        },
        logo: {
          default: '40px',
        },
        search: {
          default: '22px',
        },
        close: {
          default: '12px',
        },
        like: {
          //default: '24px',
        }
      }
    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    initFontSize: {
      type: String,
    },
    classMod: {
      type: String,
      required: false,
      validator: (value) => ['default', 'circle'].includes(value),
      //default: 'default'
    }
  },
  computed: {
    fontSize() {
      if (this.initFontSize) return this.initFontSize;
      return this.sizes[this.icon]?.[this.classMod || 'default'];
    },
    classSub() {
      if (this.classMod) return `icon_${this.classMod}`;
    },
    inlineSize() {
      if (this.fontSize) return `--init-size: ${this.fontSize}`
    }
  },
  methods: {

  },
  // mounted() {
  //   let cssClasses = Array.from(this.$el.classList);
  //   console.log(this.icon)
  //   console.log(cssClasses.filter(className => /icon-(\w|-)+/.test(className)).length)
  //
  //   function getStyle(className) {
  //     var cssText = "";
  //     var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
  //     for (var x = 0; x < classes.length; x++) {
  //       if (classes[x].selectorText == className) {
  //         cssText += classes[x].cssText || classes[x].style.cssText;
  //       }
  //     }
  //     return cssText;
  //   }
  //   console.log(getStyle('.icon-person'))
  // },
  components: {
    BaseSvg2,
    BaseSvg,
  },
};


</script>

<style lang="scss">
.icon {
  & {
    &-logo {
      font-size: 55px;
    }
    &-person {
      font-size: 24px;
    }
  }

  &_circle {
    width: 40px;
    height: 40px;
    background-color: #F1BD45;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    fill: #0075FF;
  }
}
</style>
