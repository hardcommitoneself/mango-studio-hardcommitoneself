<template>
  <div class="flex flex-col gap-4">
    <!-- header - car category -->
    <div
      class="h-11 border-b-2 border-b-primary text-3xl md:text-4xl font-semibold"
    >
      {{ this.vehicleCategorys[category] }}
    </div>

    <!-- content - car list -->
    <div class="flex flex-col gap-6">
      <mango-car v-for="car of cars" :key="car.rateQuoteId" :car="car" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { vehicleCategorys } from '~/utils/constant'

export default Vue.extend({
  name: 'MangoCategoryComponent',
  props: ['category', 'cars'],
  data() {
    return {
      vehicleCategorys,
    }
  },
})
</script>
