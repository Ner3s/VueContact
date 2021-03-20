export { default as Contact } from '../../components/Contact.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Input } from '../../components/Input.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Select } from '../../components/Select.vue'

export const LazyContact = import('../../components/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyInput = import('../../components/Input.vue' /* webpackChunkName: "components/input" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazySelect = import('../../components/Select.vue' /* webpackChunkName: "components/select" */).then(c => c.default || c)
