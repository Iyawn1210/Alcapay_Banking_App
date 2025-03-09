console.log("Hello");

// SELECTORS FOR MODALS AND PAGES
const homePage = document.querySelector(".home-page");
const welcomeSide = document.querySelector(".welcome-side");
const logInSide = document.querySelector(".log-in-side");
const bankPage = document.querySelector(".bank-page");

const homebtn = document.querySelector(".home-btn");

const createAccBtn = document.querySelector(".create-acc");
const createAccSide = document.querySelector(".create-acc-side");
const closeCreateAccBtn = document.querySelector(".close-create-acc");

const logInBtn = document.querySelector(".log-in-btn");
const logIdNumber = document.getElementById("log-id-number");
const logPin = document.getElementById("log-pin");
const logSubmitBtn = document.getElementById("log-submit");
const logInSidee = document.querySelector("log-in-side");

const welcomeMsg = document.querySelector(".welcome-msg");

const showInboxBtn = document.querySelector(".inbox-nav");
const inboxMode = document.querySelector(".inbox-mode");
const showTransactionBtn = document.querySelector(".transaction-nav");
const transactionMode = document.querySelector(".transaction-mode");
const showLogOutBtn = document.querySelector(".log-out-nav");
const logOutModal = document.querySelector(".log-out-modal");
const closeLogOut = document.querySelector(".log-out-btn");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const signEmail = document.getElementById("email");
const signPin = document.getElementById("pin");
const birthDate = document.getElementById("date");
const nationality = document.getElementById("nationality");
const signUpBtn = document.getElementById("submit");
const idNumber = document.querySelector(".id-number");
const downloadBtn = document.querySelector(".download-btn");
const createAccForm = document.querySelector(".create-acc-form");

const balance = document.querySelector(".balance");
const dateBalance = document.querySelector(".date-balance");

const sendID = document.getElementById("send-id");
const sendAmount = document.getElementById("send-amount");
const withdrawID = document.getElementById("withdraw-id");
const withdrawAmnt = document.getElementById("withdraw-amount");
const withdrawBtn = document.getElementById("withdraw-btn");
const borrowAmnt = document.getElementById("borrow-amount");
const borrowBtn = document.getElementById("borrow-btn");

const transContainer = document.querySelector(".movements");
const transNav = document.querySelector(".transaction-nav");
const transStatus = document.querySelector(".movements-status");
const transAmount = document.querySelector(".movement-amount");

const inboxContainer = document.querySelector(".inboxes");
const inbox = document.querySelector(".inbox-message-box");
const inboxDate = document.querySelector(".msg-date");
const transMethod = document.querySelector(".transaction-method-msg");
const inboxNav = document.querySelector(".inbox-nav");

const logOutID = document.getElementById("log-out-id");
const logOutPin = document.getElementById("log-out-pin");
const logOutBtn = document.getElementById("log-out-submit");
const logOutModall = document.querySelector(".log-out-modal");

const timer = document.querySelector(".timer-expire");
const staySignedInBtn = document.querySelector(".stay-signed-in-btn");
const timeOutModal = document.querySelector(".timeout-modal");

// HOMEPAGE EVENTLISTENER
createAccBtn.addEventListener("click", function () {
  createAccSide.classList.remove("hide", "fadeOut");
  welcomeSide.classList.add("hide");
  createAccSide.classList.add("fadeIn");
});
closeCreateAccBtn.addEventListener("click", function () {
  createAccSide.classList.add("fadeOut");
  createAccSide.classList.remove("fadeIn");

  //Wait for the fadeOut animation to complete before hiding the element
  setTimeout(() => {
    createAccSide.classList.add("hide");
    welcomeSide.classList.remove("hide");
    welcomeSide.classList.add("fadeIn");
  }, 500);
});
logInBtn.addEventListener("click", function () {
  logInSide.classList.remove("hide");
  logInSide.classList.add("fadeIn");
  welcomeSide.classList.add("hide");
  createAccSide.classList.add("hide");
});
homebtn.addEventListener("click", function () {
  welcomeSide.classList.remove("hide");
  createAccSide.classList.add("hide");
  logInSide.classList.add("hide");
  welcomeSide.classList.add("fadeIn");
});
// ////////////////////////////////////////////////////////////////////////////////////////////////
// BANKPAGE EVENTLISTENER

showInboxBtn.addEventListener("click", function () {
  inboxMode.classList.remove("hide");
  transactionMode.classList.add("hide");
});
showTransactionBtn.addEventListener("click", function () {
  transactionMode.classList.remove("hide");
  inboxMode.classList.add("hide");
});
showLogOutBtn.addEventListener("click", function () {
  logOutModal.classList.remove("hide");
  logOutModal.classList.add("fadeIn");
  logOutModal.classList.remove("fadeOut");
});
closeLogOut.addEventListener("click", function () {
  logOutModal.classList.remove("fadeIn");
  logOutModal.classList.add("fadeOut");
  setTimeout(() => {
    logOutModal.classList.add("hide");
  }, 500);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !logOutModal.classList.contains("hide")) {
    logOutModal.classList.add("hide");
  }
});

inboxNav.addEventListener("click", function () {
  displayInbox(currentUser);
});
// ////////////////////////////////////////////////////////////////////////////////////////////////
// CHANGING MOTO
const motoTxt = document.querySelector(".design-msg");
const mottos = [
  "Reliable,Friendly,Trusted",
  "No.1 Bank App in the Universe",
  "This is EXTRAORDINARY",
  "ALcapay for you",
];

function delayedForEach(arr, delay) {
  let i = 0;

  function next() {
    if (i < arr.length) {
      motoTxt.textContent = arr[i];
      i++;
      setTimeout(next, delay);
    }
  }
  next();
}
delayedForEach(mottos, 5000);

const users = [
  {
    firstName: "Mai",
    lastName: "Soberano",
    idNumber: 131313,
    birthDate: "10/9/1995",
    nationality: "US",
    email: "clarizaSoberano@gmail.com",
    pin: 1009,
    transactions: [100, -20],
    balance: 0,
    transDate: ["12/10/2003", "12/11/2003"],
    receiver: [131313, 141414],
  },
  {
    firstName: "LULU",
    lastName: "Reto",
    idNumber: 141414,
    birthDate: "10/9/1995",
    nationality: "US",
    email: "clarizaSoberano@gmail.com",
    pin: 2222,
    transactions: [10000, -20],
    balance: 0,
    transDate: ["12/10/2003", "12/11/2003"],
    receiver: [141414, 131313],
  },
];

// ////////////////////////////////////////////////////////////////////////////////////////////////
// BANKING BALANCE AND OPERATIONS
let currentUser = "";

// ////////////////////////////////////////////////////////////////////////////////////////////////
// USER LOGS IN _____________________________________________________________________________
logSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const isUserThere = users.some(
    (user) => user.idNumber === Number(logIdNumber.value)
  );
  const findUser = users.find(
    (user) => user.idNumber === Number(logIdNumber.value)
  );
  if (
    isUserThere &&
    findUser.idNumber === Number(logIdNumber.value) &&
    findUser.pin === Number(logPin.value)
  ) {
    console.log(logPin.value);
    console.log(logIdNumber.value);
    bankPage.classList.remove("hide");
    bankPage.classList.add("fadeIn");
    bankPage.classList.remove("fadeOut");
    homePage.classList.remove("fadeIn");
    homePage.classList.add("hide");
    currentUser = findUser;
    updateUI(currentUser);
    console.log(findUser);
    console.log(users);
    console.log(startLogOutTimer());
    logIdNumber.value = "";
    logPin.value = "";
  } else {
    logIdNumber.value = "";
    logPin.value = "";
  }
});
const convertToNumber = function (element) {
  return Number(element.value);
};

// Calculates the age

////////////////////////////////////////////////////////////////////////////////////////////////
// USER SIGN UP _____________________________________________________________________________
// Generates ID number
const randNum = Math.trunc(Math.random() * 900_000 + 100_000);
// When all form has been filled, the data will store in users array
createAccForm.addEventListener("submit", function (e) {
  if (!this.checkValidity()) {
    // If form is invalid, show the browser's validation UI
    e.preventDefault();
    return;
  }
  //If form is valid, the logic will continue
  e.preventDefault();
  idNumber.textContent = randNum;
  // adds the input values into the users array
  users.push({
    firstName: firstName.value,
    lastName: lastName.value,
    idNumber: randNum,
    birthDate: birthDate.value,
    nationality: nationality.value,
    email: email.value,
    pin: Number(signPin.value),
    transactions: [],
    transDate: [],
    receiver: [],
    balance: 0.0,
  });
  // Adds the recent user to the current user
  currentUser = users.find((user) => user.firstName === firstName.value);
  updateUI(currentUser);
  console.log(startLogOutTimer());
  console.log(currentUser);
  setTimeout(() => {
    homePage.classList.add("hide");
    homePage.classList.add("fadeOut");
    homePage.classList.remove("fadeIn");
    bankPage.classList.remove("hide");
    bankPage.classList.add("fadeIn");
    bankPage.classList.remove("fadeOut");
    firstName.value = "";
    lastName.value = "";
    birthDate.value = "";
    nationality.value = "";
    email.value = "";
    signPin.value = "";
  }, 2000);
});

// ////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
// Welcomes the USer
const welcome = function (user) {
  welcomeMsg.innerHTML = `<h1>Welcome, <span class="userName">${user.firstName} ${user.lastName}</span></h1>       
           <h4>Id Number: <span class="Id-number">${user.idNumber}</span></h4>`;
};

const calcAge = function (user, dateNow, birthDate) {
  user["age"] = Math.abs(dateNow - birthDate);
};
//display Balance
const displayBalance = function (user) {
  const totalBalance = user.transactions.reduce((acc, trans) => acc + trans, 0);
  user.balance = totalBalance;
  balance.textContent = totalBalance;
};

console.log(currentUser);
console.log(currentUser.transactions);
console.log(currentUser.age);
//Display Transactions
const displayTransactions = function (user) {
  const currencies = new Map([
    ["US", "USD"],
    ["PH", "PHP"],
  ]);
  const options = {
    style: "currency",
    currency: currencies.get(user.nationality),
  };
  transContainer.innerHTML = "";
  user.transactions.forEach((trans, i) => {
    const formattedAmnt = Intl.NumberFormat(
      currencies.get(user.nationality),
      options
    ).format(Math.abs(trans));
    const status = trans > 0 ? `Deposit` : `Withdraw`;
    const html = `   <div class="movement-row">
                <h1 class="movement-date">${user.transDate[i]}</h1>
                <h1 class="movement-status color-${status}">${status}</h1>
                <h1 class="movement-amount">${formattedAmnt}</h1>
              </div>`;
    transContainer.insertAdjacentHTML("beforeend", html);
  });
};

// Display Inbox

const displayInbox = function (user) {
  inboxContainer.innerHTML = "";
  const locale = new Map([
    ["US", "en-US"],
    ["PH", "en-PH"],
  ]);
  const optionsDate = {
    minutes: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const currencies = new Map([
    ["US", "USD"],
    ["PH", "PHP"],
  ]);
  const options = {
    style: "currency",
    currency: currencies.get(user.nationality),
  };

  user.transactions.forEach((trans, i, arr) => {
    const method1 = trans > 0 ? "Borrowed Money" : "Sent Money";
    const method2 = trans > 0 ? "Received" : "Sent";
    const formattedAmnt = new Intl.NumberFormat(
      currencies.get(user.nationality),
      options
    ).format(Math.abs(trans));

    const msg =
      trans > 0
        ? `You borrowed an amount of ${formattedAmnt}.To your account number (${user.idNumber})You can borrow money anytime you want.Thank you for choosing alcapay.Have a nice day`
        : `You sent an amount of ${formattedAmnt} to (${user.receiver[i]}).You can sent more money using alcapay. Thank you for using the app. Have a nice day`;
    const html = ` <div class="inbox-msg-box">
                <h1 class="transaction-method-msg">${method1}</h1>
                <p class="msg-text">${msg}</p>
                  <button class="copy-message-btn"></button>
                  <h2><span class="msg-status">${method2}</span><span class="msg-date">${user.transDate[i]}</span></h2>
              </div>`;
    inboxContainer.insertAdjacentHTML("beforeend", html);
  });
};
// Nationality formatting
const localeFormat = function (user) {
  // Date
  const locale = new Map([
    ["US", "en-US"],
    ["PH", "en-PH"],
  ]);
  const optionsDate = {
    minutes: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat(
    locale.get(user.nationality),
    optionsDate
  ).format(now);
  dateBalance.textContent = formattedDate;

  // Number
  const currencies = new Map([
    ["US", "USD"],
    ["PH", "PHP"],
  ]);
  const options = {
    style: "currency",
    currency: currencies.get(user.nationality),
  };
  balance.textContent = new Intl.NumberFormat(
    locale.get(user.nationality),
    options
  ).format(user.balance);
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// DISPLAY UI
const updateUI = function (user) {
  // Welcomes the user
  welcome(currentUser);
  //Display Transactions
  displayTransactions(user);
  // Display balance
  displayBalance(user);
  //Calculates Age
  calcAge(
    user,
    new Date().getFullYear(),
    new Date(user.birthDate).getFullYear()
  );
  //Date and Number Intl
  localeFormat(user);
  //Display inbox
  displayInbox(user);
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// SEND MONEY_________________________________________________-
const sendId = document.getElementById("send-id");
const sendAmnt = document.getElementById("send-amount");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const locale = new Map([
    ["US", "en-US"],
    ["PH", "en-PH"],
  ]);
  const optionsDate = {
    minutes: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  //Checks the credentioal of the receiver
  const receiver = users.some(
    (receiver) => receiver.idNumber === Number(sendId.value)
  );
  const findreceiver = users.find(
    (receiver) => receiver.idNumber === Number(sendId.value)
  );

  if (
    receiver &&
    currentUser.age >= 18 &&
    Number(sendAmount.value) <= currentUser.balance &&
    Number(sendId.value) != currentUser.idNumber
  ) {
    // Adds the money to the balance of the receiver
    findreceiver.transactions.push(Number(sendAmnt.value));
    findreceiver.transDate.push(
      Intl.DateTimeFormat(
        locale.get(currentUser.nationality, optionsDate)
      ).format(new Date())
    );
    currentUser.transDate.push(
      Intl.DateTimeFormat(
        locale.get(currentUser.nationality, optionsDate)
      ).format(new Date())
    );

    //deduct money to the balance of the current user
    currentUser.transactions.push(-Number(sendAmnt.value));
    // Addsthe receiver's name in the current receiver acc
    currentUser.receiver.push(Number(findreceiver.idNumber));

    console.log(findreceiver);
    //Updates UI
    updateUI(currentUser);
    console.log(currentUser);
    sendId.value = "";
    sendAmount.value = "";
  } else {
    sendId.value = "";
    sendAmount.value = "";
  }
});

// ////////////////////////////////////////////////////////////////////////////
// WITHDRAW MONEY
withdrawBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const locale = new Map([
    ["US", "en-US"],
    ["PH", "en-PH"],
  ]);
  const optionsDate = {
    minutes: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  if (
    currentUser.idNumber === Number(withdrawID.value) &&
    Number(withdrawAmnt.value) <= currentUser.balance
  ) {
    console.log("Yes");
    //deduct money to the balance of the current user
    currentUser.transactions.push(-Number(withdrawAmnt.value));
    currentUser.transDate.push(
      Intl.DateTimeFormat(
        locale.get(currentUser.nationality),
        optionsDate
      ).format(new Date())
    );
    currentUser.receiver.push(currentUser.idNumber);
    updateUI(currentUser);
    withdrawAmnt.value = "";
    withdrawID.value = "";
  } else {
    withdrawAmnt.value = "";
    withdrawID.value = "";
  }
});

// ////////////////////////////////////////////////////////////////////////////
// BORROW MONEY
borrowBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const locale = new Map([
    ["US", "en-US"],
    ["PH", "en-PH"],
  ]);
  const optionsDate = {
    minutes: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  if (currentUser.age >= 18 && Number(borrowAmnt.value) <= 100_000) {
    //deduct money to the balance of the current user
    currentUser.transactions.push(Number(borrowAmnt.value));
    currentUser.transDate.push(
      Intl.DateTimeFormat(
        locale.get(currentUser.nationality),
        optionsDate
      ).format(new Date())
    );
    currentUser.receiver.push(currentUser.idNumber);
    updateUI(currentUser);
    borrowAmnt.value = "";
  } else {
    borrowAmnt.value = "";
  }
});

// ////////////////////////////////////////////////////////////////////////////
// LOG OUT
logOutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentUser.idNumber === Number(logOutID.value) &&
    currentUser.pin === Number(logOutPin.value)
  ) {
    // users.remove(currentUser);
    bankPage.classList.add("hide");
    bankPage.classList.add("fadeOut");
    homePage.classList.remove("hide");
    homePage.classList.remove("fadeOut");
    homePage.classList.add("fadeIn");
    createAccSide.classList.add("hide");
    idNumber.textContent = "";
    clearInterval(startLogOutTimer());
    logOutModall.classList.add("hide");
    logInSide.classList.add("hide");
    welcomeSide.classList.remove("hide");

    currentUser = "";
    logOutID.value = "";
    logOutPin.value = "";
  } else {
    logOutID.value = "";
    logOutPin.value = "";
  }
});

// ////////////////////////////////////////////////////////////////////////////
// Set timeout to close account
// 5 minutes
let time = 300;
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaing UI
    timer.textContent = `${min}:${sec}`;

    if (sec == 10) {
      timeOutModal.classList.remove("hide");
      timeOutModal.classList.add("fadeIn");
    }
    // When 0 seconds, stop timer and log out user
    if (sec === 0) {
      clearInterval(timer);
      homePage.classList.remove("hide");
      homePage.classList.remove("fadeOut");
      homePage.classList.add("fadeIn");
      bankPage.classList.add("hide");
      createAccSide.classList.add("hide");
      logInSide.classList.add("hide");
      welcomeSide.classList.remove("hide");
      timeOutModal.classList.add("hide");
      firstName.value = "";
      lastName.value = "";
      birthDate.value = "";
      nationality.value = "";
      email.value = "";
      signPin.value = "";
      logIdNumber.value = "";
      logPin.value = "";
    }
    time--;
  };

  tick();
  const timers = setInterval(tick, 1000);
  return timers;
};

staySignedInBtn.addEventListener("click", function () {
  time = 300;
  setTimeout(() => {
    timeOutModal.classList.add("hide");
  }, 1000);
});
