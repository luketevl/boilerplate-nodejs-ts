import { getClient, getDays } from '.'
describe('Format functions', () => {
  describe('getClient', () => {
    it('should return the Regular string value', () => {
      expect(
        getClient('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')
      ).toEqual('Regular')
    })
    it('should return the same parametes when string not contains :', () => {
      const str = 'Regular 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)'
      expect(getClient(str)).toEqual(str)
    })
  })

  describe('getDays', () => {
    it('should return array with 3 positions', () => {
      const result = getDays(
        'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)'
      )
      expect(result).toHaveLength(3)
      expect(result).toStrictEqual(['mon', 'tues', 'wed'])
    })

    it('should return a empty array when input is incorrect', () => {
      const result = getDays('Regular: 16Mar2020, 17Mar2020, 18Mar2020')
      expect(result).toHaveLength(0)
    })
  })
})
