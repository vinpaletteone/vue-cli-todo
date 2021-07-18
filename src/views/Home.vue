<template>
  <div class="home">
    <v-title />
    <v-filter />
    <input-add />
    <v-list />
  </div>
</template>

<script>
import InputAdd from '../components/InputAdd.vue'
import VList from '../components/vList.vue'
import VTitle from '../components/vTitle.vue'
import VFilter from '../components/vFilter.vue'

export default {
  name: 'Home',
  components: {
    VTitle,
    InputAdd,
    VList,
    VFilter
  }
}
</script>