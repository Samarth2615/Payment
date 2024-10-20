let selectedCurrency = 'rupee';
let amount = 0;

// Define conversion rates for demonstration
const conversionRates = {
    dollarToRupee: 80,   // 1 Dollar = 80 Rupees
    bitcoinToRupee: 30000, // 1 Bitcoin = 30,000 Rupees
    rupeeToRupee: 1      // 1 Rupee = 1 Rupee
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

    // Convert the amount for display in rupees
    const amountInRupees = convertToRupees(parseFloat(amountInput));

    // Show the converted amount in rupees
    document.getElementById('confirmAmount').textContent = `${amountInRupees} ₹`; // Always display in Rupees
    document.getElementById('paymentPopup').classList.add('active'); // Activate the popup
}

// Function to convert the amount to Rupees for UPI payment
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

// Function to proceed to payment
function proceedToPayment(method) {
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

// Function to get the currency symbol based on selection
function getCurrencySymbol() {
    switch (selectedCurrency) {
        case 'rupee': return '₹';
        case 'dollar': return '$';
        case 'bitcoin': return '₿';
        default: return '';
    }
}
