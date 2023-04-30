export const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    balance: 100.32,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120],
  },
  { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57,
    deposits: [4000, 5000, 6000, 9200, 256.57],
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] },
];

export const bankAccountsNoPositiveBalance = [
  { id: 1, name: "Susan", balance: -100.32 },
  { id: 2, name: "Morgan", balance: -1100.0 },
  { id: 3, name: "Joshua", balance: -18456.57 },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: -18 },
];

export const classSeatsFlattened = [
  "Ben",
  "Emma",
  "Sophia",
  "William",
  "Elijah",
  "James",
  "Lucas",
  "Mason",
  "Mia",
  "Liam",
  "Noah",
  "Oliver",
  "Ethan",
  "Harper",
  "Evelyn",
];

export const flatArraysData = [
  ["Yay", "!", "this"],
  ["works", "as", "expected", "!"],
];
// function getAllClientNames(array) {
//   // Your code goes here...
//   let bankAccountNames = [];
//   for (let i = 0; i < array.length ; i++) {
//     bankAccountNames.push(array[i].name);
//   }
//   return bankAccountNames;
// }

// function getClientWithNoMoney(array) {
//     // Your code goes here...
//     let brokeJokes = [];
//     for (let i = 0 ; i < array.length ; i++) {
//     if (array[i].balance === 0) {
//         brokeJokes.push(array[i].name);
//     }
//    }
//    return brokeJokes;
//   }
//
// function getClientWithLeastPositiveBalance(array) {
//   // Your code goes here...
//   let lowestBalanceNotZero = array[0];
//   for (let i = 0 ; i < array.length ; i++) {
//       if (array[i].balance < lowestBalanceNotZero.balance && array[i].balance > 0) {
//         lowestBalanceNotZero = array[i];
//       }
//   }
//   return lowestBalanceNotZero.balance < 0 ? [] : [lowestBalanceNotZero];
// }
// console.log(getClientWithLeastPositiveBalance(bankAccounts));

// function getClientWithGreatestBalance(array) {
//   // Your code goes here...
//   let highestBalance = array[0];
//   for (let i = 0 ; i < array.length ; i++){
//     if (array[i].balance > highestBalance.balance) {
//       highestBalance = array[i];
//     }
//   }
//   console.log(highestBalance);
//   return [highestBalance];
// }
// console.log(getClientWithGreatestBalance(bankAccounts));
// function getClientsWithBalanceOverOneHundred(array) {
//   // Your code goes here...
//   let accountBalanceGreaterThan100 = [];
//   for (let i = 0 ; i < array.length ; i++) {
//     if (array[i].balance > 100) {
//       accountBalanceGreaterThan100.push(array[i]);
//     }
//   }
//   return accountBalanceGreaterThan100;
// }

// console.log(getClientsWithBalanceOverOneHundred(bankAccounts));

// function getClientsWithLetterInName(array, letter) {
//   // Your code goes here...
//   let accountHolderNames = [];
//   for (let i = 0 ; i < array.length ; i++) {
//     let accountObject = array[i];
//     for (let x = 0 ; x < accountObject.name.length ; x++) {
//       if (accountObject.name[x].toLowerCase() === letter.toLowerCase()) {
//         accountHolderNames.push(accountObject.name);
//       }
//       }
//     }
//     return accountHolderNames;
//   }
// console.log(getClientsWithLetterInName(bankAccounts, "e"));

// function getAllWithdrawals(array) {
//   // Your code goes here...
//   let withdrawTotal = [];

//   for (let i = 0 ; i < array.length ; i++) {
//     if (array[i].withdrawals) {
//       let sum = 0;
//       for (let x = 0 ; x < array[i].withdrawals.length ; x++) {
//         sum += array[i].withdrawals[x] ;
//       }
//       withdrawTotal.push(sum);
//       withdrawTotal
//     } else {
//       withdrawTotal.push(0);
//     }

//   }
//   return withdrawTotal;
// }

// console.log(getAllWithdrawals(bankAccounts));

// function getAllDepositsGreaterThanOneHundred(array) {
//   // Your code goes here...
//   let depositsGreaterThan100 = [];
//   for (let i = 0 ; i < array.length ; i++) {
//     if (array[i].deposits) {
//       for (let x = 0 ; x < array[i].deposits.length ; x++) {
//         if (array[i].deposits[x] > 100) {
//           depositsGreaterThan100.push(array[i].deposits[x]);
//         }
//       }
//     }
//   }
//   return depositsGreaterThan100;
// }

// console.log(getAllDepositsGreaterThanOneHundred(bankAccounts));

// function getAllAccountsWithSumsOfDepositsLess2000(array) {
//   // Your code goes here...
//   let accountsLessThan2000 = [];
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     if (array[i].deposits) {
//       let sum = 0;
//       for (let x = 0; x < array[i].deposits.length; x++) {
//         sum += array[i].deposits[x];
//       }
//       if (sum < 2000) {
//         accountsLessThan2000.push(array[i]);
//       }
//     } else {
//       accountsLessThan2000.push(array[i])
//     }
//   }
//   return accountsLessThan2000;
// }
// console.log(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts));

// function getClientsWithWrongBalance(array) {
//   // Your code goes here...
//   let clientsWithWrongBalance = [];
//   for (let i = 0; i < array.length; i++) {
//     let depositSum = 0;
//     let withdrawalSum = 0;
//     if (array[i].deposits) {
//       for (let x = 0; x < array[i].deposits.length; x++) {
//         depositSum += array[i].deposits[x];
//       }

//       if (array[i].withdrawals) {
//         for (let y = 0; y < array[i].withdrawals.length; y++) {
//           withdrawalSum += array[i].withdrawals[y];
//         }
//       }
//     }
//     if (array[i].balance !== depositSum - withdrawalSum) {
//       clientsWithWrongBalance.push(array[i]);
//     }
    
//   }
//   return clientsWithWrongBalance;
// }
// console.log(getClientsWithWrongBalance(bankAccounts));

// function concatArrays(arr1, arr2) {
//   // Your code goes here...
//   let concatArray = []
  

//   for (let i = 0 ; i < arr1.length ; i++) {
//     console.log(arr1[i])
//     concatArray.push(arr1[i])
//   }

//   for (let i = 0 ; i < arr2.length ; i++) {
//     console.log(arr2[i])
//     concatArray.push(arr2[i])
//   }

//   return concatArray
// }
// console.log(concatArrays(['d', 'r', 'a'], ['f', 'y']))
// function flatArrays(array) {
//   // Your code goes here...

//   let flatArray = []
//   for (let i = 0 ; i < array.length ; i++) {
//     if(Array.isArray(array[i])) {
//       var nestedArray = flatArrays(array[i]);
//       flatArray = flatArray.concat(nestedArray);
//     } else {
//       flatArray.push(array[i]);
//     }

//   }

//   return flatArray;
// }
// console.log(flatArrays(flatArraysData))
// function doesArrayInclude(array, value) {
//   // Your code goes here...
//   for (var i = 0 ; i < array.length ; i++) {
//     if (array[i] === value) {
//       return true 
//     }
//   }
//   return false

// }

// console.log(doesArrayInclude(['a', 'b', 'c'], 'a'))

// function joinToString(array, separator) {
//   var output = "";
//   for (var i = 0; i < array.length; i++) {
//     output += array[i];
//     if (i < array.length - 1) {
//       output += separator;
//     }
//   }
//   return output;
// }

// console.log(joinToString(['a', 'b', 'c'], '-'))

// function reverseArray(array) {
//   // Your code goes here...
//   let reversedArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
//   }
//   return reversedArray;
// }

// console.log(reverseArray([1, 2, 3 ,4]))

function separateNamesWithAFromRest(array) {
  // Your code goes here...
  for (var i = 0 ; i < array.length ; i++) {
    if (array[i] === value) {
      return true 
    }
  }
    return false

}

console.log(separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]))