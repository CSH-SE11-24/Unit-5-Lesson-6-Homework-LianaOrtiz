console.log("Script running...")
// Task 1: Define a function called `calculateArea` that takes length and width as parameters and returns the area (length * width)

function calculateArea(length, width){
 let area = length * width;
  return area
}

// Call the `calculateArea` function with any two values. Console log the result to check it.

length = 3
width = 2

let area1 = calculateArea(length, width)
console.log(area1)

// Task 2: Define a function called `checkPassing` that takes in `student` (object) as a parameter and returns whether the `grade` attribute is greater than or equal to 63.
function checkPassing(student) {
  return student.grade >= 63
}


// Define a `student` object that has name (string), class (string), and grade (number) attributes.
let student = {
  name: "Liana",
  class: "CSS",
  grade: 100,
}
  



// Call the `checkPassing` function with the `student` object. Console log the result to check it.

let isPassing = checkPassing(student)
console.log(isPassing)

// Task 3: Define a function called `printIndex` that takes in `array` and `index` as parameters and console logs the element at that index of the array.
// Pink & Blue: Define `printIndex` as an ARROW function

let printIndex = (array, index) => {
  console.log(array[index]);
}

// Define an array called `favoriteFoods` and put at least 3 elements in

let favoriteFoods = ["Pizza", "Sushi", "Pastellios"]

// Call the `printIndex` function with `favoriteFoods` and any index

printIndex(favoriteFoods, 1)

// Extra Credit: Define an arrow function called `calculateTotal` that takes in `array` (array of numbers) as a parameter and returns the total of all the numberes



// Define an array called `numbers` and put at least 3 numbers in


// Call the `calculateTotal` function with `numbers` and any index



