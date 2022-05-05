export type PricesData = {
    Regular: number,
    Fidelidade: number
}
export type HotelData = {
    name: string,
    rate: number,
    prices: {
        weekday: PricesData,
        weekend: PricesData,
    }
}
export type HotelsData = Array<HotelData>

export const hotels: HotelsData = [
    {
        name: 'Parque das flores',
        rate: 3,
        prices: {
            weekday: {
                Regular: 110,
                Fidelidade: 80
            },
            weekend: {
                Regular: 90,
                Fidelidade: 80
            }
        }
    },
    {
        name: 'Jardim Botânico',
        rate: 4,
        prices: {
            weekday: {
                Regular: 160,
                Fidelidade: 110
            },
            weekend: {
                Regular: 60,
                Fidelidade: 50
            }
        }
    },
    {
        name: 'Mar Atlântico',
        rate: 5,
        prices: {
            weekday: {
                Regular: 220,
                Fidelidade: 100
            },
            weekend: {
                Regular: 150,
                Fidelidade: 40
            }
        }
    }
]
