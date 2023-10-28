<template>
  <div
    class="flex flex-col md:flex-row justify-between gap-4 md:gap-0 md:px-6 py-2 md:py-9 md:border-b-2 border-b-gray-200"
  >
    <!-- left side -->
    <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
      <div class="md:hidden flex-col flex">
        <h3 class="font-bold">Ford Fiesta Manual</h3>
        <span class="text-xs text-gray-500">Economy or similar</span>
      </div>

      <!-- car image -->
      <mango-car-image :src="car.pictureURL" />

      <!-- car detail -->
      <mango-car-detail
        :transmissionAuto="car.transmissionAuto"
        :passengerCount="car.passengerCount"
        :driveType="car.driveType"
        :baggageCount="car.baggageCount"
        :features="car.features"
      />
    </div>

    <!-- right side -->
    <mango-booking-card />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MangoCarComponent',
  props: ['car'],
})
</script>
