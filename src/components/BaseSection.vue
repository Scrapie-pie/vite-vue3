<!--<template>-->
<!--  <div class="section">-->

<!--  </div>-->
<!--</template>-->

<script lang="jsx">
import { defineComponent } from 'vue'
import BaseContainer from "@/components/BaseContainer.vue";
//export default defineComponent({ render() { return <div>Test</div> }})
export default defineComponent({
  name: "BaseSection",
  render() {
    const slot = this.useContainer ?
      <BaseContainer>{this.$slots.default()}</BaseContainer> :
      this.$slots.default()
    return (
      <section>
        {slot}
      </section>
    );
  },
  props: {
    // mod: {
    //   type: String,
    //   validator: (value) => ['md'].includes(value),
    //   //default: 'primary'
    // },
    useContainer: {
      type: Boolean,
      default: true,
    }
  },
  mounted() {
    //console.log(this)
  },
  components: {BaseContainer},
})
</script>

<style lang="scss">
.section {
  display: flex;
  //flex-direction: column;
  width: 100%;

  &_md {
    gap: 65px;
  }

}
</style>