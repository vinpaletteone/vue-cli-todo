<template>
  <div id="app">
    <v-header />
    <home />
    <v-footer />
  </div>
</template>

<script>
import VFooter from './components/vFoot.vue'
import VHeader from './components/vHeader.vue'
import Home from './views/Home.vue'
export default {
  name:'App',
  components: {
    VHeader,
    VFooter,
    Home
  }
}
</script>

    Home