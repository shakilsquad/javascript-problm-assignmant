
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

const total = canPay([1, 5, 5], 10)
console.log(total);