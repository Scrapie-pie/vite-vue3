<template>
  <div class="field" :class="classArray">
    <span v-if="label" class="field-name">
      {{label}}
    </span>
    <div :class="`field-wrapper`">
      <slot name="before"></slot>
      <div class="field-inline">
        <slot name="left"></slot>
        <div class="field-action">
          <slot>
            <BaseTextarea
                v-if="type === 'textarea'"
                v-bind="$attrs"
                :model-value="modelValue"
                @update:model-value="modelValue = $event"
            />
            <BaseInput
                v-else
                v-bind="$attrs"
                :model-value="modelValue"
                @update:model-value="modelValue = $event"
                :type="type"
                ref="input"
                :placeholder="placeholderMod === 'default' ? placeholder : null"
            />
          </slot>
          <span
              v-if="placeholder && placeholderMod !== 'default'"
              v-show="isShowPlaceholder"
              class="field-placeholder"
              :class="placeholderClass"
          >
            {{placeholder}}
          </span>
        </div>
        <slot name="right"></slot>
      </div>
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>

import BaseTextarea from "@/components/BaseTextarea.vue";
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: 'BaseFieldTest',
  data() {
    return {
      value: '',
      isFocused: false,
    }
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'text',
    },
    label: String,
    placeholder: String,
    placeholderMod: {
      type: String,
      validator: (value) => ['default', 'inline', 'popup'].includes(value),
      default: 'default'
    },
  },
  inheritAttrs: false,
  computed: {
    classArray() {
      return [
        this.type === 'textarea' ? "field_textarea" : "field_input",
        { "field_filled": this.modelValue.length },
        { "field_focused": this.isFocused },
        // this.placeholderMod === 'popup' ? 'field_popup' : ''
      ]
    },
    placeholderClass() {
      switch (this.placeholderMod) {
        case 'popup': return `field-placeholder_popup`;
        case 'inline': return '';
      }
    },
    isShowPlaceholder() {
      switch (this.placeholderMod) {
        case 'popup': return true;
        case 'inline': return !this.modelValue.length && !this.isFocused;
      }
    },
    // listeners() {
    //   let vm = this;
    //   console.log(this.modelValue)
    //   return Object.assign({},
    //       this.$listeners,
    //       {
    //         input(value) {
    //           console.log(vm.$listeners)
    //           vm.value = value;
    //           vm.$emit('input', value);
    //         },
    //         mounted(initValue) {
    //           vm.value = initValue;
    //         },
    //         focus() { vm.isFocused = true },
    //         blur() { vm.isFocused = false }
    //       }
    //   )
    // },
  },
  watch: {
    modelValue(newValue) {
      console.log(newValue)
    }
  },
  components: {
    BaseInput,
    BaseTextarea

  }
}
</script>

<style lang="scss">
.field {
  $self: &;
  width: 100%;
  @include flex-it(column, 10px);
  &-name {
    color: get-var(color, grey_dark);
    width: min-content;
  }
  &-wrapper {
    display: flex;
    align-items: center;
  }
  #{$self}-inline {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    font-size: 14px;
    border: 1px solid red;
    padding-left: 20px;
  }
  #{$self}-action {
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: text;
    //margin-left: 12px;
    font-weight: 300;
  }
  #{$self}-placeholder {
    position: absolute;
    width: 100%;
    left: 0;
    pointer-events: none;
    font-size: 14px;
    transition: .25s ease-out;
    line-height: 0;
  }
  .input::placeholder, #{$self}-placeholder {
    color: currentColor;
  }
  &_input {
    #{$self}-placeholder {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .input, .textarea {
    width: 100%;
    &[required] + #{$self}-placeholder {
      &:after {
        content: ' *';
        color: #FF1300;
      }
    }
  }
  &_textarea {
    padding-top: 60px;
    .textarea {
      height: 1em;
      overflow: hidden;
    }
    #{$self}-placeholder {
      bottom: 60px;
    }
  }

  &_filled .input + #{$self}-placeholder_popup,
  .input:focus + #{$self}-placeholder_popup {
    font-size: 16px;
    top: -10px;
    transition: .1s ease-in;
  }

  //&_popup#{&}_filled, &_popup#{&}_focused & {
  //
  //  &-action {
  //    position: static;
  //  }
  //  &-inline {
  //    position: relative;
  //  }
  //}
  //&_filled & {
  //
  //}

}
</style>