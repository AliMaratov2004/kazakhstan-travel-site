document.addEventListener("DOMContentLoaded", () => {
  const dummyRates = {
    USD: "510.32 KZT",
    EUR: "548.26 KZT",
    RUB: "5.31 KZT",
    KGS: "5.92 KZT",
    CNY: "69.80 KZT"
  };

  const currencyValues = document.querySelectorAll(".currency-value");
  const codes = ["USD", "EUR", "RUB", "KGS", "CNY"];

  codes.forEach((code, index) => {
    currencyValues[index].textContent = dummyRates[code];
  });
});
