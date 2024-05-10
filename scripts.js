const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = parseFloat(entries.get("dividend"));
  const divider = parseFloat(entries.get("divider"));

  const divisionResult = dividend / divider;
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;
  } else {
    showError("Division result is not a whole number.");
  }

  if (isNaN(dividend) || isNaN(divider)) {
    showError("Please enter valid numbers.");
    return;
  }

   if (divider === 0) {
     showError("Division by zero is not allowed.");
     return;
   }
});