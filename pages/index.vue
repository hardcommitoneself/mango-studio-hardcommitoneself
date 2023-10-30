<template>
  <div class="flex flex-col space-y-12">
    <mango-category
      v-for="(carsInCategory, category) in carsByCategory"
      :key="category"
      :category="category"
      :cars="carsInCategory"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Car, CarsByCategory } from 'types'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    const cars: Car[] = []

    return {
      cars,
    }
  },
  computed: {
    carsByCategory() {
      const carsByCategory: CarsByCategory = {}

      for (const car of this.cars) {
        const category = car.vehicleCategory

        if (!carsByCategory[category]) {
          carsByCategory[category] = []
        }

        carsByCategory[category].push(car)
      }

      return carsByCategory
    },
  },
  async fetch() {
    const response = await fetch(
      `${process.env.apiUrl}/rates/${process.env.apiKey}?currency=EUR&driverAge=21&pickupDate=2023-10-30T19:00:00&pickupDeskCode=brimb1&returnDate=2023-11-01T19:00:00&returnDeskCode=brimb1&sourceCountry=IS&promoCode=&apiKey=&partnerCode=`
    )

    const responseJson = (await response.json()) as {
      rates: { [key: string]: Car[] }
    }

    this.cars = ([] as Car[]).concat(...Object.values(responseJson.rates))
  },
})
</script>
