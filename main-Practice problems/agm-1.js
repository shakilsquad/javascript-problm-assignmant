function cubeNumber(number) {
      const massage = 'this is not a number, plz try to current number ';
      if (typeof number !== 'number') {
            return massage;
      }
      else {
            const first = number * number * number;

            return first;
      }
}
const totalNumber = cubeNumber(3)
console.log(totalNumber);