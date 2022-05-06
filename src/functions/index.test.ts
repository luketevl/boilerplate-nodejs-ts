import { getLowPrice } from '.'
import { hotels } from './../config/hotel'

describe('Teste cases', () => {
  it('test case 1', () => {
    const result = getLowPrice('Regular', ['mon', 'tues', 'wed'], hotels)
    expect(result).toStrictEqual('Parque das flores')
  })
  it('test case 2', () => {
    const result = getLowPrice('Regular', ['fri', 'sat', 'sun'], hotels)
    expect(result).toStrictEqual('Jardim Botânico')
  })
  it('test case 3', () => {
    const result = getLowPrice('Fidelidade', ['thur', 'frid', 'sat'], hotels)
    expect(result).toStrictEqual('Mar Atlântico')
  })
})
