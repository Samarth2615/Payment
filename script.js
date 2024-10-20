let selectedCurrency = 'rupee';
let amount = 0;

// Function to set the selected currency
function setCurrency(currency) {
    selectedCurrency = currency;
    document.getElementById('amountInput').placeholder = `Enter amount in ${getCurrencySymbol()}`;
    document.getElementById('amountInput').value = '';
}

// Function to show the payment popup
function showPopup() {
    let amountInput = document.getElementById('amountInput').value;
    
    if (!amountInput || amountInput <= 0) {
        alert("Please enter a valid amount to proceed with payment.");
        return;
    }
    
    amount = amountInput;
    document.getElementById('confirmAmount').textContent = `${amount} ${getCurrencySymbol()}`;
    document.getElementById('paymentPopup').classList.add('active');
}

// Function to proceed to payment
function proceedToPayment(method) {
    let amount = document.getElementById('amountInput').value; // get entered amount
    if (amount && amount > 0) {
        // Construct the UPI link dynamically with the correct amount
        const upiLink = `upi://pay?pa=9518230329@fam&pn=Samarth&tn=Payment%20for%20Services&am=${amount}&cu=INR`;
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
