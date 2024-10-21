let selectedCurrency = 'rupee'; // Default currency is Rupees
let amount = 0;

// Conversion rates for different currencies
const conversionRates = {
    dollarToRupee: 80,        // 1 Dollar = 80 Rupees
    bitcoinToRupee: 30000,    // 1 Bitcoin = 30,000 Rupees
    rupeeToRupee: 1           // 1 Rupee = 1 Rupee
};

// Set the selected currency
function setCurrency(currency) {
    selectedCurrency = currency;
    document.getElementById('amountInput').placeholder = `Enter amount in ${getCurrencySymbol()}`;
    document.getElementById('amountInput').value = ''; // Clear the input field
}

// Show payment confirmation popup
function showPopup() {
    let amountInput = document.getElementById('amountInput').value;

    if (!amountInput || amountInput <= 0) {
        alert("Please enter a valid amount to proceed with payment.");
        return;
    }

    // Convert amount to rupees
    const amountInRupees = convertToRupees(parseFloat(amountInput));

    // Display the converted amount in the popup
    document.getElementById('confirmAmount').textContent = `${amountInRupees} ₹`; // Always show in Rupees
    document.getElementById('paymentPopup').classList.add('active'); // Activate the popup
}

// Convert amount to Rupees based on the selected currency
function convertToRupees(amountInput) {
    switch (selectedCurrency) {
        case 'dollar':
            return amountInput * conversionRates.dollarToRupee; // Convert Dollars to Rupees
        case 'bitcoin':
            return amountInput * conversionRates.bitcoinToRupee; // Convert Bitcoins to Rupees
        case 'rupee':
        default:
            return amountInput; // Return as is for Rupees
    }
}

// Proceed to payment
function proceedToPayment() {
    let amountInput = document.getElementById('amountInput').value; // Get the entered amount
    if (amountInput && amountInput > 0) {
        // Convert the amount for processing in the UPI link
        const amountInRupees = convertToRupees(parseFloat(amountInput));
        
        // Create UPI link dynamically based on the input amount in Rupees
        const upiLink = `upi://pay?pa=ankurpunia526@okhdfcbank&pn=Samarth&tn=Pay%20to%20Samarth&am=${encodeURIComponent(amountInRupees)}&cu=INR`;
        
        // Open the UPI app with the generated link
        window.location.href = upiLink;
    } else {
        alert("Please enter a valid amount to proceed with payment.");
    }
}

// Get currency symbol based on selected currency
function getCurrencySymbol() {
    switch (selectedCurrency) {
        case 'rupee': return '₹';
        case 'dollar': return '$';
        case 'bitcoin': return '₿';
        default: return '';
    }
}
