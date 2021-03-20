import Vue from 'vue'

const components = {
  Contact: () => import('../../components/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Input: () => import('../../components/Input.vue' /* webpackChunkName: "components/input" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Select: () => import('../../components/Select.vue' /* webpackChunkName: "components/select" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
