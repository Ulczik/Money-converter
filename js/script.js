console.log("Hejka =]");

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const button = document.querySelector(".js-button");
const resultElement = document.querySelector(".js-result");

const rateUSD = 4.01;
const rateEUR = 4.32;
const rateGBP = 5.06;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;
  let result;

  switch (currency) {
    case "USD":
      result = amount / rateUSD;
      break;
    case "EUR":
      result = amount / rateEUR;
      break;
    case "GBP":
      result = amount / rateGBP;
      break;
  }
  resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(
    2
  )} ${currency}`;
});
