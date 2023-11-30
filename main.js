console.log("Hello World");
// label
let userAge = "";
let userName = "";
let userIsBanned = false;
// input commands
function confirmAgeAndName() {
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
      `${inputUserName} is under the legal drinking age and therefore must leave`
    );
  }
  // Resultat i resultatboks
  if (inputUserName && inputUserAge >= 18 && !userIsBanned) {
    results.innerHTML = `${inputUserName} is above age and is allowed to enter for drinks`;
  } else {
    results.innerHTML = `${inputUserName} is under the legal drinking age, or banned and therefore must leave`;
  }
  // Boks viser resultat
  results.classList.add("show");
}
// EventListener for Enter, med å klikke enter så slipper du å klikke "Confirm"
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    confirmAgeAndName();
  }
});
