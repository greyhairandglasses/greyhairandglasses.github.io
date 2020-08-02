// To find the values that are unique between two different arrays
// First combine the arrays
// Then filter the items that appear in BOTH arrays and return them within their own array
// eg.

const arrayOfThings = [1, 3, 5, 6, 'cheese', 'bread', 1010101]
const anotherArrayOfThings = [1, 5, 6, 8, 'bread', 1010101, 101010101]

const findUniqueValues = (arr1, arr2) => {
  return new Array(...arr1, ...arr2)
    .filter(item => !(arr1.includes(item) && arr2.includes(item)) ? item : false)
}

console.log(findUniqueValues(arrayOfThings, anotherArrayOfThings));


// EASY READER

function uniqueFinder(arr1, arr2) {
  // COMBINE ARRAYS - Makes it easier to compare which are duplicates between the two arrays
  const newArr = [...arr1, ...arr2];
  // FILTER ITEMS - Now check if the item in our new array is present in BOTH original arrays
  // If so, do NOT return it
  const filtered = newArr.filter(item => {
    if (!(arr1.includes(item) && arr2.includes(item))) {
      return item
    }
  })

  // After filtering, return our new array
  return filtered
}

uniqueFinder(arrayOfThings, anotherArrayOfThings)