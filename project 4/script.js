// Getting DOM elements
const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');

// fetch exchange rate and update the DOM

function calculate() {
    // Get the currency code for currency one and currency two
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;
    
    // Send Request to exchangeRate -API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/70dfa7b3255a5abaad40993e/pair/${currencyOneCode}/${currencyTwoCode}`)
        .then(res => res.json())
        .then(data => {
            // Get the Conversion Rate from Currency one to Currency Two
            const conversionRate = data.conversion_rate;
            // Update the DOM to display the conversion rate
            rate.innerHTML = `${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
            // Display the converted amount
            amountTwo.value = (amountOne.value * conversionRate).toFixed(2);
        });

    
}


// Event Listeners
// 1. Recalculate exchange rate when currency one is change
currencyOne.addEventListener('change', calculate);

// 2. Recalculate exchange rate when Amount one is change
amountOne.addEventListener('input', calculate);

// 3. Recalculate exchange rate when currency two is change
currencyTwo.addEventListener('change', calculate);

// 4. Recalculate exchange rate when Amount one is change
amountTwo.addEventListener('input', calculate);

// 5. Swap the currency one value to currency two and currency two to one
swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    // Recalculate exchange rates after swap
    calculate();

});

// execute calculate function on page load.
calculate();
