console.log("Hello World");

let userAge = "";
let userName = "";

function confirmAgeAndName() {
  const inputUserName = document.getElementById("userName").value;
  const inputUserAge = parseInt(document.getElementById("userAge").value);
  const results = document.getElementById("results");
  // Resultat i konsoll
  if (inputUserName && inputUserAge >= 18) {
    console.log("User is above age and is allowed to enter for drinks");
  } else {
    console.log(
      "User is under the legal drinking age and therefore must leave"
    );
  }
  // Resultat i resultatboks
  if (inputUserName && inputUserAge >= 18) {
    results.innerHTML = "User is above age and is allowed to enter for drinks";
  } else {
    results.innerHTML =
      "User is under the legal drinking age and therefore must leave";
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
