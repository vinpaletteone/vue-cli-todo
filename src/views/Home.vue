<template>
  <div class="home">
    <v-title />
    <filter />
    <input-add />
    <v-list />
  </div>
</template>

<script>
import Filter from '../components/Filter.vue'
import InputAdd from '../components/InputAdd.vue'
import VList from '../components/vList.vue'
import VTitle from '../components/vTitle.vue'

export default {
  name: 'Home',
  components: {
    VTitle,
    InputAdd,
    VList,
    Filter,
  }
}
</script>
