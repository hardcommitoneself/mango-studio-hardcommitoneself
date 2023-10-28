<template>
  <img :src="src" class="md:h-64 md:w-80" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MangoCarImageComponent',
  props: ['src'],
})
</script>
