// Global variable to store balance (for simulation purposes)
let balance = 5000;

// Update balance display
function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

// Login validation (simple demo)
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "User" && password === "password123") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home page after successful login
    } else {
        alert("Invalid username or password.");
    }
});

// Withdraw money
document.getElementById('withdraw-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    if (amount <= balance && amount > 0) {
        balance -= amount;
        updateBalance();
        alert("Withdrawal successful!");
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

// Deposit money
document.getElementById('deposit-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
        alert("Deposit successful!");
    }
});
// Sample transaction data (this could be replaced with real data from your backend)
const transactions = [
    { type: 'Deposit', amount: 500, date: '2024-12-01' },
    { type: 'Withdraw', amount: 200, date: '2024-12-02' },
    { type: 'Deposit', amount: 300, date: '2024-12-03' },
    { type: 'Withdraw', amount: 100, date: '2024-12-04' }
];


