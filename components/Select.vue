<template>
  <div class="container">
    <select
      :name="name"
      @focus="handleRotate(true)"
      @blur="handleRotate(false)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <img
      src="../assets/icons/ChevronDown.svg"
      alt="Seta select"
      :class="{ rotate: focus }"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: 'name',
      type: String,
    },
    options: Array,
  },
  data() {
    return {
      focus: {
        default: false,
        type: Boolean,
      },
    }
  },
  methods: {
    handleRotate(value) {
      this.focus = value
    },
  },
}
</script>

<style lang="scss" scoped="true">
.container {
  position: relative;
  color: $default;
  background: $grey;
  max-width: 15rem;
  width: 100%;
  height: 3.5rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  border-radius: 1rem;
  padding: 0 1rem 0 1rem;
  box-shadow: 0.1rem 0.1rem 1rem #00000020;

  & img {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 0;
    transition: transform 200ms ease-in-out;
  }

  & select {
    all: unset;
    display: flex;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    align-items: center;
    z-index: 1;
  }

  @media (max-width: 470px) {
    & {
      max-width: 100%;
      margin: 0;
    }
  }
}

.rotate {
  transform: rotate(-180deg);
}
</style>
