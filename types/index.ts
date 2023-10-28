export type Car = {
  id: string
  model: string
  displayName: string
  acrissCode: string
  passengerCount: number
  doorCount: number
  pictureURL: string
  baggageCount: number
  categoryType: string
  vehicleType: string
  transmissionAuto: boolean
  driveType: string
  fuelType: string
  airConditioning: boolean
  features: string[]
  guaranteedModel: boolean
  defaultModel: boolean
}

export type CarsByCategory = {
  [key: string]: Car[]
}
