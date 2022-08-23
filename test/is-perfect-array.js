import { expect } from 'chai';
import isPerfectCircle from '../src/module/perfect-circle/application'

describe('Check if is a perfect circle of array', () => {
  it('Should fail because not perfect circle', () => {
      const testCase = [
          [0, 2 , 5],
          [0, 3 , 5, 6, 8],
          [0, 1 , 5, 4],
          [0, 4 , 5, 1, 0, 5],
          [3,0,-1,2]
      ]
      testCase.forEach((input) => {
        const resp = isPerfectCircle(input)
        expect(resp).equal(false);
      })

  })
  it("Should be sucessfull", () => {
    const input = [3,0, 1, 2];
    const resp = isPerfectCircle(input)
    expect(resp).equal(true);
  })
})
