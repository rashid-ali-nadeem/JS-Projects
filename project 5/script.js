// Get DOM Elements
const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const filterBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const sumBtn = document.getElementById('sum');

// Initialize data array
let data = [];

// Fetch random user from randomuser.me
async function getRandomUser () {
    // Wait for the results from the API
    const res = await fetch('https://randomuser.me/api/');
    // Wait for response to conver into JSON 
    const data = await res.json();
    // Get the User Data
    const user = data.results[0];
    // Get the User name
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
    }  
    // Add the new user to the data array
    addData(newUser);
}

// create  Add Data function
function addData(user) {
    // Add the new User data to Data Array
    data.push(user);
    // Update the DOM to display the Data
    updateDOM();
}

// function  double the money of all users
function doubleMoney() {
    // loop through all users in the user data arry
    // for each user, return the user data
    // overwrite the data arry with the new data array created by map
    data = data.map(user => {
        return { ...user, balance: user.balance * 2 }
    });
    // update the DOM using the new user data array
    updateDOM();
}

// function to filter only Millionaire users
 function filterMillionair() {
    // filter out all users whose balance is greater than 1 million
    data = data.filter(user => user.balance >= 1000000);
    // Update the DOM with new user data
    updateDOM();
 }

 // function to sort users by balance
 function sortByWealth() {
    // sort users by balance using a compare function inside sort
    data = data.sort((a,b) => a.balance - b.balance);
    // Update the DOM with the new user data
    updateDOM();
 }

 // function to sum all users' balance into total balance 
 function totalBalance() {
     // Update the DOM with the new user data
     updateDOM();
    // add up all the balance from all user
    // accumulator start at 0 and addsd the current user's balance from each iteration
    const balance = data.reduce((acc, user) => (acc += user.balance), 0);
    // Create a div for the balance
    const balanceElement = document.createElement('div');
    // set the innerHTML for the new div
    balanceElement.innerHTML = `<h3>Total Balance: ${formateNumberToDollar(balance)} </h3>`;
    // append the Balance in main element
    main.appendChild(balanceElement);
    
 }

// function to formate random number as money
function formateNumberToDollar(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Update the UI with data from the user data array
function updateDOM(userData = data) {
    // Clear previous UI
    main.innerHTML = '<h2><strong>User</strong> Wealth</h2>';
    // Loop through userData and randor in the UI
    userData.forEach(user => {
        // Create a Div element for the user
        const userDiv = document.createElement('div');
        // Apply the user class to tu new div
        userDiv.classList.add('user');
        // Add innerHTML to the user div
        userDiv.innerHTML = `<strong>${user.name}</strong> 
                            ${formateNumberToDollar(user.balance)}`;
        // Add the new element into the DOM
        main.appendChild(userDiv);
    });
}

// Create a Random User
getRandomUser();


// Event Listeners
// 1. Add User
addUser.addEventListener('click', getRandomUser);
// 2. Listen for click on double money
doubleBtn.addEventListener('click', doubleMoney);
// 3. Listen for click on Filter Millionairs
filterBtn.addEventListener('click', filterMillionair);
// 4. Listen for click on Sort Button
sortBtn.addEventListener('click', sortByWealth);
// 5. Listen for click on Add all Wealth button
sumBtn.addEventListener('click', totalBalance);