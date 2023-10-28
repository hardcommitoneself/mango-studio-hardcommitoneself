<template>
  <div class="flex flex-col gap-4">
    <!-- header - car category -->
    <div class="h-11 border-b-2 border-b-primary text-3xl md:text-4xl">
      {{ category }}
    </div>

    <!-- content - car list -->
    <div class="flex flex-col gap-6">
      <MangoCar v-for="car of cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MangoCategoryComponent',
  props: ['category', 'cars'],
})
</script>
