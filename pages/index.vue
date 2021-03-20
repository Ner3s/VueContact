<template>
  <section>
    <Header />
    <section id="root">
      <h1>Leads</h1>
      <form class="__form" @submit="handleSubmitForm($event)">
        <Input :name="'search'" :type="'search'" />
        <Select :name="'filter'" :options="options" />
      </form>
      <main>
        <Contact :users="users" />
      </main>
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const users = await $axios.$get('/users')
    return { users }
  },
  data() {
    return {
      users: [],
      options: [
        { label: 'Nome', value: 'name' },
        { label: 'Tag empresa', value: 'company.bs' },
      ],
      form: {
        search: '',
        filter: '',
      },
    }
  },

  methods: {

    handleSubmitForm($event) {
      $event.preventDefault() // Previne o padrão do formulário que é recaregar a página.

      /**
       * @help
       * - Nesse laço For é onde os componentes do formulário são renderizados de forma dinâmica.
       * - Ex.:
       *    this.form[search] = valor do input search
       */
      for (let index = 0; index < $event.target.length; index++) {
        this.form[$event.target[index].name] = $event.target[index].value
      }

      // Chamada do método que faz a requisição a api.
      this.handleSearch(this.form)
    },

    async handleSearch(form) {
      let users

      form.search !== ''
        ? (users = await this.$axios.$get(
            `/users?${form.filter}=${form.search}`
          ))
        : (users = await this.$axios.$get(`/users`))

      this.users = users
    },
  },
}
</script>

<style lang="scss" scoped="true">
#root {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 7rem 2.5rem 0 2.5rem;
  background-image: url('~/assets/icons/Background.svg');
  background-position-y: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;

  & h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 1rem;
  }

  & main,
  .__form {
    max-width: 60rem;
    width: 100%;
  }

  & .__form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 470px) {
      & {
        flex-direction: column;
      }
    }
  }
}
</style>
