// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositValue = document.getElementById("depositAmount").value;
  const depositAmount = parseFloat(depositValue);

  const currentDepositValue = document.getElementById(
    "currentDepositAmount",
  ).innerText;
  const currentDepositAmount = parseFloat(currentDepositValue);
  const totalDepositAmount = depositAmount + currentDepositAmount;

  document.getElementById("currentDepositAmount").innerText =
    totalDepositAmount;
  document.getElementById("depositAmount").value = "";

  const currentBalanceValue =
    document.getElementById("currentBalance").innerText;
  const currentBalanceAmount = parseFloat(currentBalanceValue);

  const totalBalance = totalDepositAmount + currentBalanceAmount;

  document.getElementById("currentBalance").innerText = totalBalance;
});

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawValue = document.getElementById("withdrawAmount").value;
  const withdrawAmount = parseFloat(withdrawValue);

  const currentWithdrawValue = document.getElementById(
    "currentWithdrawAmount",
  ).innerText;
  const currentWithdrawAmount = parseFloat(currentWithdrawValue);
  const totalWithdrawAmount = currentWithdrawAmount + withdrawAmount;

  const currentBalanceValue =
    document.getElementById("currentBalance").innerText;
  const currentBalanceAmount = parseFloat(currentBalanceValue);

  if (currentBalanceAmount >= withdrawAmount) {
    const totalBalance = currentBalanceAmount - withdrawAmount;
    document.getElementById("currentWithdrawAmount").innerText =
      totalWithdrawAmount;
    document.getElementById("withdrawAmount").value = "";

    document.getElementById("currentBalance").innerText = totalBalance;
  } else {
    alert("Balance not available!");
  }
});
