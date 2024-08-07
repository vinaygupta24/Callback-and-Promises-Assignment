// Probleum 1 1. Double using callback.

/*
function doubleArray(arr, callback) {
  return arr.map(callback);
}

// Callback function to double a number
function double(num) {
  return num * 2;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, double);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
*/


// Probleum 2 String Manipulation.

/*
// Function that takes a string and returns a callback function
function manipulateString(str) {
  // Convert the input string to uppercase
  const manipulatedString = str.toUpperCase();

  // Return a callback function that logs the manipulated string
  return function logString() {
    console.log(`The manipulated string is: ${manipulatedString}`);
  };
}

// Example usage
const myString = "hello world";
const log = manipulateString(myString);

// Call the callback function to log the result
log(); // Output: The manipulated string is: HELLO WORLD
*/


// Probleum 3 Age in Days

/*
// Function that takes an object with name and age, and returns a callback function
function ageInDays(person) {
  // Destructure the person's first name, last name, and age
  const { firstName, lastName, ageInYears } = person;

  // Concatenate the first and last names into a full name
  const fullName = `${firstName} ${lastName}`;

  // Calculate the age in days (assuming 365.25 days per year to account for leap years)
  const ageInDays = ageInYears * 365.25;

  // Return a callback function that logs the message
  return function logMessage() {
    console.log(`The person's full name is ${fullName} and their age in days is ${Math.round(ageInDays)}.`);
  };
}

// Example usage
const person = {
  firstName: 'John',
  lastName: 'Doe',
  ageInYears: 30
};

const log = ageInDays(person);

// Call the callback function to log the result
log(); // Output: The person's full name is John Doe and their age in days is 10958.
*/


//Probleum 4 Arrange in alphabetical order

/*
// Function that takes a list of books and a callback function
function processBooks(books, callback) {
  // Create a list of book titles using map
  const titles = books.map(book => book.title);
  
  // Call the callback function with the list of titles
  callback(titles);
}

// Callback function that logs titles in alphabetical order
function logTitlesInAlphabeticalOrder(titles) {
  // Sort the titles in alphabetical order
  const sortedTitles = titles.sort();
  
  // Log the sorted titles to the console
  console.log('Book titles in alphabetical order:');
  sortedTitles.forEach(title => console.log(title));
}

// Example usage
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'Moby Dick', author: 'Herman Melville', year: 1851 }
];

// Call processBooks with the books list and the logTitlesInAlphabeticalOrder callback
processBooks(books, logTitlesInAlphabeticalOrder);
*/


// Probleum 5 Greeting Promise.

/*
// Function that returns a Promise with a greeting message
function greet(name) {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string' && name.trim() !== '') {
      // Create the greeting message
      const greetingMessage = `Hello, ${name}!`;
      // Resolve the Promise with the greeting message
      resolve(greetingMessage);
    } else {
      // Reject the Promise if the input is invalid
      reject('Invalid name provided');
    }
  });
}

// Example usage
greet('Mithun')
  .then(message => {
    console.log(message); // Output: Hello, Mithun!
  })
  .catch(error => {
    console.error(error);
  });
*/


// Probleum 6 Fetch results asynchronously

/*
async function fetchData() {
  try {
    // Perform the fetch operation
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the JSON from the response
    const data = await response.json();
    
    // Log the data to the console
    console.log(data);
  } catch (error) {
    // Log any errors to the console
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the function to fetch and log the data
fetchData();
*/


// Probleum 7 Multiple requests

/*
async function fetchMultipleData() {
  try {
    // Perform both fetch operations simultaneously using Promise.all
    const [todoResponse, postResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1'),
      fetch('https://jsonplaceholder.typicode.com/posts/1')
    ]);

    // Check if both responses are successful
    if (!todoResponse.ok || !postResponse.ok) {
      throw new Error('One or both network responses were not ok');
    }

    // Parse the JSON from both responses
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    // Combine the results into an object
    const combinedResults = {
      todo: todoData,
      post: postData
    };

    // Log the combined results to the console
    console.log(combinedResults);
  } catch (error) {
    // Log any errors that occur during the fetch operations or data processing
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the function to fetch and log the combined data
fetchMultipleData();
*/


// Probleum 8 Get Data from API and Display it on the browser console.

/*
// Function to fetch data from the API and log it to the console
async function fetchAndDisplayPosts() {
  try {
    // Fetch data from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the JSON from the response
    const posts = await response.json();
    
    // Log the retrieved data to the console
    console.log(posts);
  } catch (error) {
    // Log any errors that occur during the fetch operation or data processing
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the function to fetch and display the posts
fetchAndDisplayPosts();
*/


// Probleum 9 Error Handling

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error Handling with Fetch</title>
</head>
<body>
  <h1>Fetch Error Handling Example</h1>
  <div id="output"></div>

  <script>
    // Function to fetch data from the API and handle errors
    async function fetchData() {
      const outputDiv = document.getElementById('output');

      try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
        
        // Check if the response is successful
        if (!response.ok) {
          // Simulate an error message based on response status
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        // Parse the JSON from the response
        const data = await response.json();
        
        // Display the data on the webpage
        outputDiv.textContent = JSON.stringify(data, null, 2);
      } catch (error) {
        // Display the error message on the webpage
        outputDiv.textContent = `Failed to fetch data: ${error.message}`;
      }
    }

    // Call the function to fetch and handle data
    fetchData();
  </script>
</body>
</html>
*/