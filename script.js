let selectedCurrency = 'rupee'; // Default currency is Rupees
let amount = 0;

// Conversion rates for demonstration purposes
const conversionRates = {
    dollarToRupee: 80,        // 1 Dollar = 80 Rupees
    bitcoinToRupee: 30000,    // 1 Bitcoin = 30,000 Rupees
    rupeeToRupee: 1           // 1 Rupee = 1 Rupee
};

// Function to set the selected currency
function setCurrency(currency) {
    selectedCurrency = currency;
    document.getElementById('amountInput').placeholder = `Enter amount in ${getCurrencySymbol()}`;
    document.getElementById('amountInput').value = ''; // Clear the input field
}

// Function to show payment confirmation popup
function showPopup() {
    let amountInput = document.getElementById('amountInput').value;

    if (!amountInput || amountInput <= 0) {
        alert("Please enter a valid amount to proceed with payment.");
        return;
    }

    // Convert the amount to rupees
    const amountInRupees = convertToRupees(parseFloat(amountInput));

    // Show the amount in the popup and make the popup visible
    document.getElementById('confirmAmount').textContent = `${amountInRupees} ₹`; // Always show in Rupees
    document.getElementById('paymentPopup').style.display = 'block'; // Display the popup
}

// Convert the entered amount to Rupees
function convertToRupees(amountInput) {
    switch (selectedCurrency) {
        case 'dollar':
            return amountInput * conversionRates.dollarToRupee; // Convert Dollars to Rupees
        case 'bitcoin':
            return amountInput * conversionRates.bitcoinToRupee; // Convert Bitcoins to Rupees
        case 'rupee':
        default:
            return amountInput; // If Rupees, no conversion needed
    }
}

// Function to proceed to payment with converted amount
function proceedToPayment() {
    let amountInput = document.getElementById('amountInput').value; // Get entered amount
    if (amountInput && amountInput > 0) {
        // Convert to rupees for payment processing
        const amountInRupees = convertToRupees(parseFloat(amountInput));
        
        // Create UPI payment link with the amount in Rupees
        const upiLink = `upi://pay?pa=ankurpunia526@okhdfcbank&pn=Samarth&tn=Pay%20to%20Samarth&am=${encodeURIComponent(amountInRupees)}&cu=INR`;
        
        // Redirect to UPI payment app
        window.location.href = upiLink;
    } else {
        alert("Please enter a valid amount to proceed with payment.");
    }
}

// Function to return the appropriate currency symbol
function getCurrencySymbol() {
    switch (selectedCurrency) {
        case 'rupee': return '₹';
        case 'dollar': return '$';
        case 'bitcoin': return '₿';
        default: return '';
    }
}

// Function to redirect on clicking image with fixed 40 rupees
function payFixedAmount() {
    const upiLink = `upi://pay?pa=ankurpunia526@okhdfcbank&pn=Samarth&tn=Pay%20to%20Samarth&am=40&cu=INR`;
    window.location.href = upiLink;
}
