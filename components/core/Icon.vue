<template>
  <img :src="require(`~/assets/icons/${name}`)" class="w-4 h-4 md:w-6 md:h-6" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CoreIconComponent',
  props: ['name'],
})
</script>
