<template>
  <input
    class="input"
    :class="classMod"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
  >
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
const props = defineProps({
  label: String,
  modelValue: String,
  type: {
    type: String,
    //validator: (value) => ['text', 'mail', 'password', 'number'].includes(value),
    default: "text",
  },
  placeholder: String,
  mod: {
    type: String,
    validator: (value) => ['primary'].includes(value),
  },
});

const emit = defineEmits(['update:modelValue', 'mounted']);
console.log(props.mod)
const classMod = computed(() => props.mod ? `input--${props.mod}` : '');
const focus = () => this.$el.focus();

onMounted(() => emit('mounted', props.modelValue));

// export default {
//   name: "BaseInput",
//   inheritAttrs: false,
//   props: {
//     label: String,
//     modelValue: String,
//     type: {
//       type: String,
//       //validator: (value) => ['text', 'mail', 'password', 'number'].includes(value),
//       default: "text",
//     },
//     placeholder: String,
//     mod: {
//       type: String,
//       validator: (value) => ['primary'].includes(value),
//     },
//   },
//   computed: {
//     inputListeners: function () {
//       let vm = this
//       return Object.assign({},
//         this.$listeners,
//         {
//           input: function (event) {
//             vm.$emit('update:modelValue', event.target.value)
//           }
//         }
//       )
//     },
//     classMod() {
//       if (this.mod) {
//         return `input--${this.mod}`
//       }
//     },
//   },
//   methods: {
//     focus() {
//       console.log(this.$refs.input)
//       this.$refs.input.focus();
//     }
//   },
//   mounted() {
//     this.$emit('mounted', this.$el.value)
//   }
// }
</script>

<style lang="scss">
.input {}
</style>
