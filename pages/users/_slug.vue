<template>
  <section>
    <Header />
    <section id="root">
      <h1>Lead</h1>
      <div class="content">
        <div class="link">
          <NuxtLink to="../">
            <img src="../../assets/icons/ArrowLeft.svg" alt="Seta voltar" />
            <h3>Voltar</h3>
          </NuxtLink>
          <span></span>
        </div>
        <main class="user">
          <section class="__name-username">
            <h2>{{ user.name }}</h2>
            <p>{{ user.username }}</p>
          </section>
          <a class="__email" :href="'mailto:' + user.email">{{ user.email }}</a>
          <br />
          <a class="__phone" :href="'tel:' + user.phone">{{ user.phone }}</a>
          <address class="__address">
            <h3>Endereço</h3>
            <h4>
              {{ user.address.street }}, {{ user.address.suite }} -
              {{ user.address.city }}
            </h4>
            <p>{{ user.address.zipcode }}</p>
          </address>
          <section class="__company">
            <h3>Empresa</h3>
            <h4>{{ user.company.name }}</h4>
            <p>{{ user.company.catchPhrase }}</p>
            <p>{{ user.company.bs }}</p>
          </section>
        </main>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(`/users/${params.slug}`);
    return { user };
  },

  data() {
    return {
      user: [],
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped="true">
#root {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100vh;
  height: 100%;
  align-items: center;
  padding: 7rem 2.5rem 0 2.5rem;
  background-image: url("../../assets/icons/Background.svg");
  background-position-y: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;

  & h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 1rem;
  }

  & .content {
    max-width: 60rem;
    width: 100%;

    & .link {
      display: flex;

      span {
        display: flex;
        flex: 1;
        width: 100%;
      }

      & a {
        display: flex;
        flex: 0;
        width: 100%;
        color: $grey;

        h3 {
          margin: 0 0.5rem;
          font-size: 1.8rem;
        }

        &:hover {
          transform: translateX(10px);
        }
      }
    }
  }
}

.user {
  margin: 1.5rem 0;
  width: 100%;
  padding: 2.5rem;
  font-size: 1.8rem;
  background: $grey;
  color: $primary;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem #00000030;

  & .__name-username {
    display: flex;
    flex: 1;
    justify-content: space-between;

    & p {
      font-weight: 400;
      color: $light-blue;
      font-size: 2rem;
    }

    @media (max-width: 400px) {
      & {
        display: block;
      }
    }
  }

  & a.__email {
    color: $blue;
    border: none;
  }

  & a.__phone {
    color: #000;
    margin-bottom: 1.5rem;
    border: none;
  }

  & .__address {
    margin-bottom: 2rem;
    font-style: normal;

    & h3 {
      font-size: 1.8rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: $light-blue 0.1rem solid;
    }

    & h4 {
      font-size: 1.8rem;
      color: $light-blue;
      font-weight: 400;
    }

    & p {
      color: #000;
    }
  }
  & .__company {
    margin-bottom: 2rem;

    & h3 {
      font-size: 1.8rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: $light-blue 0.1rem solid;
    }

    & h4 {
      font-size: 1.8rem;
      color: $light-blue;
      font-weight: 400;
    }

    & p {
      color: #000;
    }
  }
}
</style>
