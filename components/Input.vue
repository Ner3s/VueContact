<template>
  <div class="container">
    <img src="../assets/icons/Search.svg" alt="Icone de lupa" />
    <input class="__input" :type="type" placeholder="Pesquisar" :name="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: 'name',
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped="true">
.container {
  display: flex;
  flex: 1;
  max-width: 45rem;
  width: 100%;
  height: 3.5rem;
  padding: 0.5rem 0.8rem;
  margin: 1.5rem 0;
  background: #fff;
  border-radius: 1rem;

  & .__input {
    border: none;
    font-size: 1.8rem;
    padding: 0 0.5rem;
    width: 100%;
    color: $default;
  }
}
</style>
