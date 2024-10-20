let selectedCurrency = 'rupee';
let amount = 0;

// Define conversion rates for demonstration
const conversionRates = {
    dollar: 80,   // 1 Dollar = 80 Rupees
    bitcoin: 30000, // 1 Bitcoin = 30,000 Rupees
    rupee: 1      // 1 Rupee = 1 Rupee
};

// Function to set the selected currency
function setCurrency(currency) {
    selectedCurrency = currency;
    document.getElementById('amountInput').placeholder = `Enter amount in ${getCurrencySymbol()}`;
    document.getElementById('amountInput').value = ''; // Clear the input field
}

// Function to show the payment popup
function showPopup() {
    let amountInput = document.getElementById('amountInput').value;

    if (!amountInput || amountInput <= 0) {
        alert("Please enter a valid amount to proceed with payment.");
        return;
    }

    // Show the entered amount in the selected currency
    document.getElementById('confirmAmount').textContent = `${amountInput} ${getCurrencySymbol()}`;
    document.getElementById('paymentPopup').classList.add('active'); // Activate the popup
}

// Function to convert the amount to Rupees for UPI payment
function convertToRupees(amountInput) {
    switch (selectedCurrency) {
        case 'dollar':
            return amountInput * conversionRates.dollar; // Convert Dollars to Rupees
        case 'bitcoin':
            return amountInput * conversionRates.bitcoin; // Convert Bitcoins to Rupees
        case 'rupee':
        default:
            return amountInput; // Return as is for Rupees
    }
}

// Function to proceed to payment
function proceedToPayment(method) {
    let amountInput = document.getElementById('amountInput').value; // Get the entered amount
    if (amountInput && amountInput > 0) {
        // Convert the amount for processing in the UPI link
        const amountInRupees = convertToRupees(parseFloat(amountInput));
        
        // Create UPI link dynamically based on the input amount in Rupees
        const upiLink = `upi://pay?pa=ankurpunia526@okhdfcbank&pn=Samarth&tn=Payment%20for%20Services&am=${encodeURIComponent(amountInRupees)}&cu=INR`;
        
        // Open the UPI app with the generated link
        window.location.href = upiLink;
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
        default: return '';
    }
}
