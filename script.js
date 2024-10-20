let selectedCurrency = 'rupee';
let amount = 100;

// Function to update slider and input field
function updateAmount() {
    const slider = document.getElementById('amountSlider');
    const input = document.getElementById('amountInput');
    input.value = slider.value;
    amount = slider.value;
}

// Function to update slider when input is changed
function updateSlider() {
    const slider = document.getElementById('amountSlider');
    const input = document.getElementById('amountInput');
    slider.value = input.value;
    amount = input.value;
}

// Function to set the selected currency
function setCurrency(currency) {
    selectedCurrency = currency;
    updateConversion();
}

// Function to show the payment popup
function showPopup() {
    document.getElementById('paymentPopup').classList.add('active');
    document.getElementById('confirmAmount').textContent = `${amount} ${getCurrencySymbol()}`;
}

// Function to proceed to payment
function proceedToPayment(method) {
    let amount = document.getElementById('amountInput').value; // get entered amount
    if (amount && amount > 0) {
        // Construct the UPI link dynamically with the correct amount
        const upiLink = `upi://pay?pa=9253323008@fam&pn=Samarth&tn=Payment%20for%20Services&am=${amount}&cu=INR`;
        window.location.href = upiLink; // Redirect to the UPI app
    } else {
        alert("Please enter a valid amount to proceed with payment.");
    }
}

// Function to get the currency symbol based on selection
function getCurrencySymbol() {
    switch (selectedCurrency) {
        case 'rupee': return '₹';
        case 'dollar': return '$';
        case 'bitcoin': return '₿';
    }
}

// Function to update conversion rates (just mock for now)
function updateConversion() {
    // Update amounts based on currency, mock conversion rates
    const conversionRates = {
        'rupee': 1,
        'dollar': 0.012,
        'bitcoin': 0.0000003
    };
    const slider = document.getElementById('amountSlider');
    const input = document.getElementById('amountInput');
    input.value = (amount * conversionRates[selectedCurrency]).toFixed(2);
    slider.value = input.value;
}
