function extractPositiveNumbers(arr) {
      const positiveNumbers = [];
  
      for (let i = 0; i < arr.length; i++) {
          const num = arr[i];
  
          if (num >= 0) {
              positiveNumbers.push(num);
          } else {
              break; // Stop the loop when a negative number is encountered
          }
      }
  
      return positiveNumbers;
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, -1, 4, 5];
  const result = extractPositiveNumbers(numbersArray);
  console.log(result); // Output: [1, 2, 3]
  