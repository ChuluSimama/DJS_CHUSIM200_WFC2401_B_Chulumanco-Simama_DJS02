const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  const divisionResult = dividend / divider;
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;
  } else {
    showError("Division result is not a whole number.");
  }

});