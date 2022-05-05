export type Client = 'Regular' | 'Fidelidade'
export type GetClientData =  (input: string) => Client

export const getClient: GetClientData  = input => {
    const items = input.split(':')
    return items[0] as Client
}

export type GetDaysData = (input: string) => Array<string>

export const getDays: GetDaysData  = (input) => {
    const regex = /([(])([A-Za-z]+)([)])/g
    const results = [...input.matchAll(regex)]
    return results.map(result => result[2])
}
