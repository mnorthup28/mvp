console.log("here");

const distanceInput = document.getElementById("distance");
const distanceValue = document.getElementById("distanceValue");

distanceInput.addEventListener("input", function () {
  if (distanceInput.value == 10) {
    distanceValue.textContent = "10+ Miles";
  } else {
    distanceValue.textContent = distanceInput.value + " Miles";
  }
});
