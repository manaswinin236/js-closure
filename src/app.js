// Progression 1:
const NEG_INF = -1000000;

// Progression 2:
let title = 'Array Search';
let currIndex = -1;
let check = false;

// Progression 3:
function searchForElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      currIndex = i;
      check = true;
      return true;
    }
  }
  currIndex = -1;
  check = false;
  return false;
}

// Progression 4:
function createPop(array, item) {
  searchForElement(array, item);
  return function () {
    if (check) {
      return `The item is present and is at index ${currIndex}`;
    } else {
      return `The item is not present and is at index ${NEG_INF}`;
    }
  };
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
const pop = createPop(arrayOfNumbers, itemToSearch);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createPop,
    searchForElement,
    NEG_INF,
  };
}
