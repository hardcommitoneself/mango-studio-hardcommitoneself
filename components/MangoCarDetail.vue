<template>
  <div class="flex flex-col gap-8 justify-between">
    <!-- model & display name -->
    <div class="md:flex flex-col hidden">
      <h3 class="text-2xl font-bold">{{ displayName }}</h3>
      <span class="text-sm text-gray-500"
        >{{ this.vehicleCategorys[vehicleCategory] }} or similar</span
      >
    </div>

    <div class="flex justify-between md:justify-normal md:flex-col gap-8">
      <!-- metadata -->
      <div class="flex flex-col md:flex-row gap-2.5 md:gap-6 md:items-center">
        <!-- manual -->
        <div class="flex space-x-2 items-center">
          <core-icon name="transmission.svg" />
          <span class="text-gray-700 text-xs md:text-base">{{
            transmissionAuto ? 'Auto' : 'Manual'
          }}</span>
        </div>

        <!-- passengers -->
        <div class="flex space-x-2 items-center">
          <core-icon name="users.svg" />
          <span class="text-gray-700 text-xs md:text-base"
            >{{ passengerCount }} Passengers</span
          >
        </div>

        <!-- FWD -->
        <div class="flex space-x-2 items-center">
          <core-icon name="caricon-wheel.svg" />
          <span class="text-gray-700 text-xs md:text-base">{{
            driveType
          }}</span>
        </div>

        <!-- bags -->
        <div class="flex space-x-2 items-center">
          <core-icon name="caricon-luggage.svg" />
          <span class="text-gray-700 text-xs md:text-base"
            >{{ baggageCount }} Bags</span
          >
        </div>
      </div>

      <!-- features -->
      <div
        class="flex flex-wrap flex-col md:flex-row md:items-center gap-2 md:gap-8"
      >
        <div
          v-for="(feature, index) of features"
          :key="index"
          class="flex items-center space-x-4"
        >
          <core-icon name="checkmark.svg" />
          <span class="text-gray-700 text-xs md:text-base">{{ feature }}</span>
        </div>
      </div>
    </div>

    <!-- car detail -->
    <div class="flex items-center space-x-2.5">
      <span class="text-xs md:text-base font-bold">Car details</span>
      <core-icon name="info.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { vehicleCategorys } from '~/utils/constant'

export default Vue.extend({
  name: 'MangoCarDetailComponent',
  props: [
    'transmissionAuto',
    'passengerCount',
    'driveType',
    'baggageCount',
    'features',
    'displayName',
    'vehicleCategory',
  ],
  data() {
    return {
      vehicleCategorys,
    }
  },
})
</script>
