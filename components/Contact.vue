<template>
  <div class="container">
    <section v-for="user in users" :key="user.id" class="card">
      <NuxtLink :to="'users/' + user.id">
        <section class="__name-username">
          <p>{{ user.name }}</p>
          <p>{{ user.username }}</p>
        </section>
        <p>{{ user.email }}</p>
        <section class="__phone-company">
          <p>{{ user.phone }}</p>
          <p><strong>Empresa: </strong> {{ user.company.name }}</p>
        </section>
      </NuxtLink>
    </section>
    <section v-if="users.length === 0" class="card-no-user">
      <p>Usuário(s) não encontrado!</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    users: Array,
  },
}
</script>

<style lang="scss" scoped="true">
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  & .card {
    width: 100%;
    color: $default;
    margin: 1.5rem 0;
    padding: 1.5rem;
    font-size: 1.8rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    background: $grey;
    border-radius: 1rem;
    box-shadow: 0.1rem 0.1rem 1rem #00000020;
    transition: transform 200ms ease-in-out;

    &:hover {
      transform: translateX(1rem);
    }

    & .__name-username {
      display: flex;
      flex: 1;
      justify-content: space-between;
      font-size: 2.4rem;

      & p {
        font-weight: 700;
        color: $default;
      }

      & p:last-child {
        font-size: 2rem;
        color: $light-blue;
        font-weight: 400;
      }

      @media (max-width: 440px) {
        & {
          display: block;
        }
      }
    }

    & p {
      color: $light-blue;
    }

    & .__phone-company {
      display: flex;
      flex: 1;
      justify-content: space-between;

      & p {
        color: $default;
      }

      @media (max-width: 500px) {
        & {
          display: block;
        }

        & p {
          margin-top: 0.5rem;
        }
      }
    }
  }

  & .card-no-user {
    font-size: 2rem;
    color: $default;
    width: 100%;
    margin: 1.5rem 0;
    padding: 1.5rem;
    flex: 1;
    display: flex;
    justify-content: center;
    background: $grey;
    border-radius: 1rem;
    box-shadow: 0.1rem 0.1rem 1rem #00000020;
  }
}
</style>
