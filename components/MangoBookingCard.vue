<template>
  <div
    class="flex md:flex-col gap-5 justify-between md:justify-center items-center px-4 py-6 md:px-0 md:py-0 md:h-64 md:min-w-[320px] rounded-2xl bg-gray-100 md:ml-24"
  >
    <div class="flex flex-col gap-4 md:gap-5">
      <h3 class="text-2xl md:text-4xl font-bold">
        {{ rateTotalAmount }} {{ currency }}
      </h3>

      <div class="text-xs md:text-base md:text-center">
        <p class="text-xs">
          for {{ rentalDays }} days -
          {{ (rateTotalAmount / rentalDays).toFixed(2) }} EUR per day
        </p>
        <p class="text-xs text-gray-700">VAT included in price</p>
      </div>
    </div>

    <div class="flex flex-col gap-2 md:gap-5">
      <core-button>Book now</core-button>

      <div class="flex items-center space-x-2">
        <core-icon name="light.svg" />
        <span class="text-xs md:text-xs">Immediate confirmation</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MangoBookingCardComponent',
  props: ['currency', 'rentalDays', 'rateTotalAmount'],
})
</script>
