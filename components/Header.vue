<template>
  <header class="nav-header">
    <NuxtLink to="/">
      <Logo label="VueContact" />
    </NuxtLink>
  </header>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped="true">
.nav-header {
  display: flex;
  flex: 1;
  height: 7rem;
  padding: 1rem 2rem 0.3rem 2rem;
  background: $grey;
  box-shadow: 0.2rem 0.2rem 2rem #00000020;
  width: 100%;
  position: fixed;
  z-index: 2;
}

@media (max-width: 470px) {
  .nav-header {
    justify-content: center;
  }
}
</style>
