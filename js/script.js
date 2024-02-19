{
  const welcome = () => {
    console.log("Hejka =]");
  };

  const formElement = document.querySelector(".js-form");
  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");
  const button = document.querySelector(".js-button");
  const resultElement = document.querySelector(".js-result");

  const calculateResult = (amount, currency) => {
    return amount / currency;
  };

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency);

    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(
      2
    )} ${currency}`;
  });

  welcome();
}
