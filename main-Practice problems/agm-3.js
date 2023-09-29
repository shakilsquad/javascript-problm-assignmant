function sortMaker(arr) {
      let inputItem = arr[0];
      for (let i = 0; i < arr.length; i++) {
            const massage ='invalid input';
            const num = arr[i]
            if (num < 0) {
                  return massage;
            }
            else {
                  if (num !== inputItem) {
                        const numbers = arr.slice().sort(function (a, b) { return b - a })
                        return numbers
                  }
            }

      }
      return 'equal'
}

const short = sortMaker([8, 8])
console.log(short)


