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

function matchFinder(string1, string2 ) {
      let massage = 'this is not a staring, place try to staring number ';
      if(typeof string1 !== 'string' && typeof string2 !== 'string' ){
            return massage;
      }
      else{
      const first = string1.includes(string2);
      return  first;
      }
}

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

function findAddress(obj) {
      const street= obj.street ? obj.street : "__"
      const house = obj.house ? obj.house : "__"
      const society = obj.society ? obj.society : "__"
     console.log(street,',',house, ',',society)
}
const myObj ={
      street:10,
      house:'',
      society:''
}


function canPay(changeArray, totalDue) {
      
      let totalCost = 0;
      const massage = 'empty'
      for (let i = 0; i < changeArray.length; i++) {
            let cost = changeArray[i]
            totalCost += cost;
      }

      if (changeArray == "") {
            return massage
      } else {
            let totalSum = totalCost
            if (totalSum >= totalDue) {
                  return true
            }
            else {
                  return false;
            }
      }

}
