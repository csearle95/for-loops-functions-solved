
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let accountsLessThan2000 = [];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i].deposits) {
      let sum = 0;
      for (let x = 0; x < array[i].deposits.length; x++) {
        sum += array[i].deposits[x];
      }
      if (sum < 2000) {
        accountsLessThan2000.push(array[i]);
      }
    } else {
      accountsLessThan2000.push(array[i])
    }
  }
  return accountsLessThan2000;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
