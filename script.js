// Login demo
document.getElementById('loginForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if(user && pass){
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('msg').innerText = "Please enter username & password";
  }
});

// Register demo
document.getElementById('registerForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const user = document.getElementById('regUsername').value;
  const pass = document.getElementById('regPassword').value;
  if(user && pass){
    document.getElementById('regMsg').innerText = "Registered successfully!";
  } else {
    document.getElementById('regMsg').innerText = "Please fill all fields";
  }
});

// Deposit/Withdraw demo
let balance = 100;
function deposit(){
  const amount = Number(document.getElementById('amount').value);
  if(amount>0){
    balance += amount;
    document.getElementById('balanceMsg').innerText = "Balance: $"+balance;
  }
}
function withdraw(){
  const amount = Number(document.getElementById('amount').value);
  if(amount>0 && amount <= balance){
    balance -= amount;
    document.getElementById('balanceMsg').innerText = "Balance: $"+balance;
  }
}