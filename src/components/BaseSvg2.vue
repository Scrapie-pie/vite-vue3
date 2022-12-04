<template>
  <InlineSvg
    class="svg"
    :src="`/src/assets/icons/${icon}.svg?raw`"
    :width="relativeSize.width"
    :height="relativeSize.height"
    ref="icon"
    @loaded="onSvgLoaded"
  />
</template>

<script>
//Переделать ли в скрипт сетап?
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'BaseSvg2',
  data() {
    return {
      originalSize: {
        width: null,
        height: null,
      },
      isSvgLoaded: false,
    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    hasFill: {
      type: Boolean,
      default: false
    },
    growByHeight: {
      type: Boolean,
      default: true
    },
    initFontSize: [String]
  },
  computed: {
    widthToHeight() {
      return (parseFloat(this.originalSize.width) / parseFloat(this.originalSize.height)).toFixed(2);
    },
    relativeSize() {
      if (!this.isSvgLoaded) {
        return this.originalSize;
      }
      const width = this.growByHeight ? `${this.widthToHeight}em` : '1em';
      const height = this.growByHeight ? '1em' : `${1 / this.widthToHeight}em`;
      return { width, height };
    },
    fontSize() {
      if (this.initFontSize) return this.initFontSize;
      let {width, height} = this.originalSize;
      return (width > height ? width : height) + 'px';
    }
  },
  methods: {
    determineOriginalSize() {
      const viewBox = this.$refs.icon.$el.getAttribute('viewBox').split(' ').map(n => Number(n));
      this.originalSize = { width: `${viewBox[2]}px`, height: `${viewBox[3]}px` };
    },
    recursivelyRemoveFill(el = this.$refs.icon.$el) {
      if (!el) return;
      el.removeAttribute('fill');
      [].forEach.call(el.children, child => {
        this.recursivelyRemoveFill(child);
      });
    },
    onSvgLoaded(svgElement) {
      if (svgElement.nodeName === 'svg') {
        this.determineOriginalSize();
        if (this.hasFill) {
          this.recursivelyRemoveFill();
        }
      }
      this.isSvgLoaded = true;
    }
  },
  components: {
    InlineSvg
  },
};

</script>

<style lang="scss">
.svg {
 // display: flex;
  vertical-align: middle;
  //font-size: var(--init-size);
  fill: currentColor;
}

</style>
