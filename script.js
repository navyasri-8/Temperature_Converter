const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusToFahrenheitButton = document.getElementById(
  "celsiusToFahrenheit"
);
const fahrenheitToCelsiusButton = document.getElementById(
  "fahrenheitToCelsius"
);
const resultElement = document.getElementById("result");

celsiusToFahrenheitButton.addEventListener("click", () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
  resultElement.textContent = `${celsiusValue}°C is ${fahrenheitValue.toFixed(
    2
  )}°F`;
});

fahrenheitToCelsiusButton.addEventListener("click", () => {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
  resultElement.textContent = `${fahrenheitValue}°F is ${celsiusValue.toFixed(
    2
  )}°C`;
});
