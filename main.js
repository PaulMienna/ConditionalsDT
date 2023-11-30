console.log("Hello World");
// label
let userName = "";
let userAge = "";
let userIsBanned = false;
const submitButton = document.getElementById("submit-btn");
// input commands
function confirmNameAndAge() {
  const inputUserName = document.getElementById("userName").value;
  const inputUserAge = parseInt(document.getElementById("userAge").value);
  const results = document.getElementById("results");
  // Resultat i konsoll
  event.preventDefault();
  if (inputUserName && inputUserAge >= 18 && !userIsBanned) {
    console.log(
      `${inputUserName} is above age and is allowed to enter for drinks`
    );
  } else {
    console.log(
      `${inputUserName} is under the legal drinking age, or banned and therefore must leave`
    );
  }
  // Resultat i resultatboks
  if (inputUserName && inputUserAge >= 18 && !userIsBanned) {
    results.innerHTML = `${inputUserName} is above age and is allowed to enter for drinks`;
  } else {
    results.innerHTML = `${inputUserName} is under the legal drinking age and therefore must leave`;
  }
  // Boks viser resultat
  results.classList.add("show");
}
