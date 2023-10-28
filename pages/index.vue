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
import { v4 as uuidv4 } from 'uuid'

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
        const category = car.categoryType

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
      `${process.env.apiUrl}/car-info/${process.env.apiKey}`
    )

    const responseJson = (await response.json()) as {
      options: { [key: string]: Car[] }
    }

    this.cars = ([] as Car[])
      .concat(...Object.values(responseJson.options))
      .map((car) => {
        return {
          ...car,
          id: uuidv4(),
        }
      })
  },
})
</script>
