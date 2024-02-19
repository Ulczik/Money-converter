{
  const welcome = () => {
    console.log("Hejka =]");
  };

  const calculateResult = (amount, currency) => {
    return amount / currency;
  };

  const updateResultText = (amount, currency, result) => {
    const resultElement = document.querySelector(".js-result");

    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(
      2
    )} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, currency, result);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

    welcome();
  };

  init();
}
