const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

const loadingErrorMessageEl = document.getElementById("loadingErrorMessage");

// Show loading
function showMessage(type, message) {
  loadingErrorMessageEl.className = `loadingErrorMessage ${type}`;
  const small = loadingErrorMessageEl.querySelector("small");
  small.innerText = message;
}

// Hide message
function hideMessage() {
  loadingErrorMessageEl.className = "loadingErrorMessage";
  const small = loadingErrorMessageEl.querySelector("small");
  small.innerText = "";
}

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  if (amountEl_one.value >= 0) {
    showMessage("loading", "Loading...");

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          showMessage("error", data.error);
        }
        const rate = data.rates[currency_two];

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

        hideMessage();
      })
      .catch((error) => {
        showMessage("error", error.message);
      });
  } else {
    showMessage("error", "The amount must be positive");
  }
}

// Event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
