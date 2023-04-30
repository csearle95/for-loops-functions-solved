// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let accountHolderNames = [];
  for (let i = 0 ; i < array.length ; i++) {
    let accountObject = array[i];
    for (let x = 0 ; x < accountObject.name.length ; x++) {
      if (accountObject.name[x].toLowerCase() === letter.toLowerCase()) {
        accountHolderNames.push(accountObject.name); 
      }
      }
    }   
    return accountHolderNames;
  }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
