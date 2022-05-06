import { createInterface } from 'readline'
import { getLowPrice } from './functions/'
import { getClient, getDays } from './helper/format/'
import { hotels } from './config/hotel'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What type and period of booking? `, (input: string) => {
  const days = getDays(input)
  const client = getClient(input)
  console.log(getLowPrice(client, days, hotels))
  readline.close()
})
