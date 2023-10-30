export type Currency = 'EUR' | 'USD'

export type InclusiveItem = {
  otaCode: number
  groupType: string
}

export type MandatoryItem = {
  otaCode: number
  groupType: string
  price: number
  currency: Currency
}

export type Excesses = {
  amount: number
  currency: Currency
  deposit: number
}

export type Car = {
  model: string
  acrissCode: string
  rateStatus: string
  vehicleCategory: string
  transmissionAuto: boolean
  doorCount: number
  passengerCount: number
  baggageCount: number
  airConditioning: boolean
  driveType: string
  inclusiveItems: InclusiveItem[]
  mandatoryItems: MandatoryItem[]
  excesses: Excesses[]
  rentalDays: number
  rateQuoteId: string
  pictureURL: string
  currency: Currency
  estimatedTotalAmount: number
  rateTotalAmount: string
  mileagePolicy: {
    mileageTypeUnlimited: boolean
    mileageQuantity: string
    mileageUnitType: string
    mileageUnitPeriodType: string
  }
  fuelPolicy: string
  displayName: string
  promoCode: string
  features: string[]
  isGuaranteedModel: boolean
  isDefaultModel: boolean
  vehicleId: number
  productCode: string
}

export type CarsByCategory = {
  [key: string]: Car[]
}
