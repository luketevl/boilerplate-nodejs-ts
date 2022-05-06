import { Client } from './../helper/format'
import { HotelsData, HotelData } from '../config/hotel'
import { weekend, weekday } from '../config/week'
export type GetLowPriceData = (
  client: Client,
  days: Array<string>,
  hotels: HotelsData
) => string

export const getLowPrice: GetLowPriceData = (
  client,
  days = [],
  hotels = []
) => {
  let lowPrice = Number.MAX_SAFE_INTEGER
  let hotelResult = {
    rate: 0,
    name: ''
  }
  hotels.map((hotel: HotelData) => {
    let currPrice = 0
    days.map((day) => {
      if (weekend.includes(day)) {
        currPrice += hotel.prices.weekend[client]
      } else if (weekday.includes(day)) {
        currPrice += hotel.prices.weekday[client]
      }
    })

    if (
      currPrice < lowPrice ||
      (currPrice === lowPrice && hotel.rate > hotelResult.rate)
    ) {
      hotelResult = hotel
      lowPrice = currPrice
    }
  })
  return hotelResult.name
}
