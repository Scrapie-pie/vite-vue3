<template>
<!-- <i/> вынести в компонент baseIcon  -->
  <i :class="`icon icon-${icon}`" :style="`--init-size: ${fontSize}`">
    <InlineSvg
      :src="`/src/assets/icons/${icon}.svg?raw`"
      :width="relativeSize.width"
      :height="relativeSize.height"
      ref="icon"
      @loaded="onSvgLoaded"
    />
  </i>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
const toComponentName = (name) => 'Icon' + name.split(/[-|_]/).map(chunk => capitalize(chunk)).join('');
const modules = import.meta.glob('/src/assets/icons/*.svg')
const iconAsyncComponents = {};
for (const path in modules) {
  const componentName = toComponentName(path.match(/\/([^\/]+?)\.svg$/)[1]);
  iconAsyncComponents[componentName] = modules[path]
}

export default {
  name: 'BaseSvg',
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
    currentComponent() {
      return toComponentName(this.icon);
    },
    widthToHeight() {
      return (this.originalSize.width / this.originalSize.height).toFixed(2);
    },
    relativeSize() {
      if (!this.isSvgLoaded) {
        return this.originalSize;
      }
      const width = this.growByHeight ? `${this.widthToHeight}em` : '1em';
      const height = this.growByHeight ? '1em' : `${1 / this.widthToHeight}em`;
      console.log('1')
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
      this.originalSize = { width: viewBox[2], height: viewBox[3] };
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
.icon {
  display: flex;
  vertical-align: middle;
  font-size: var(--init-size);
}

</style>
