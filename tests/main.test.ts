import { it, test, expect, describe } from 'vitest'

describe('group of related tests', () => {
    test('should be 2', () => {
        expect(2).toBe(2)
    })
    it('should be 9', () => {
        expect(9).toBeTruthy()
    })

})