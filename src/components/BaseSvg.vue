<template>
  <i :class="`icon icon-${this.icon}`" :style="`--init-size: ${fontSize}`">
    <component
      :is="currentComponent"
      :width="relativeSize.width"
      :height="relativeSize.height"
      ref="icon"
    />
  </i>
</template>

<script>

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
const toComponentName = (name) => 'Icon' + name.split(/[-|_]/).map(chunk => capitalize(chunk)).join('');
const modules = import.meta.glob('/src/assets/icons/*.svg')
//console.log(modules)
const iconAsyncComponents = {};
for (const path in modules) {
  const componentName = toComponentName(path.match(/\/([^\/]+?)\.svg$/)[1]);
  iconAsyncComponents[componentName] = () => import(`${path}?import`);
}

console.log(iconAsyncComponents)


// const requireComponents = {};
// const requireComponentContext = require.context('../assets/icons/', false, /\.svg$/i, 'lazy'); //lazy!
// requireComponentContext.keys().forEach((fileName, index) => {
//   const componentName = toComponentName(fileName.match(/\/(.+?)\.svg$/)[1]);
//   const componentConfig = requireComponentContext(fileName);
//   requireComponents[componentName] = () => componentConfig;
// });

export default {
  name: 'BaseSvg',
  data() {
    return {
      originalSize: {
        width: null,
        height: null,
      },
      onceUpdated: false,
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
      if (!this.onceUpdated) {
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
      const viewBox = this.$refs.icon.getAttribute('viewBox').split(' ').map(n => Number(n));
      this.originalSize = { width: viewBox[2], height: viewBox[3] };
    },
    recursivelyRemoveFill(el = this.$refs.icon) {
      if (!el) return;
      el.removeAttribute('fill');
      [].forEach.call(el.children, child => {
        this.recursivelyRemoveFill(child);
      });
    }
  },
  mounted() {
    console.log(this.currentComponent)
  },
  updated() {
    if (!this.onceUpdated) {
      if (this.$refs.icon.nodeName === 'svg') {
        this.determineOriginalSize();
        if (this.hasFill) {
          this.recursivelyRemoveFill();
        }
      }
      this.onceUpdated = true;
    } else {

    }

  },
  components: {
    ...iconAsyncComponents
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
