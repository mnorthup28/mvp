const trailContainer = document.getElementById("trailList");

const distanceInput = document.getElementById("distance");
const distanceValue = document.getElementById("distanceValue");

distanceInput.addEventListener("input", function () {
  if (distanceInput.value == 10) {
    distanceValue.textContent = "10+ Miles";
  } else if (distanceInput.value == 0) {
    distanceValue.textContent = "Less than 1 mile";
  } else {
    distanceValue.textContent = distanceInput.value + " Miles";
  }
});

// make container to hold matching results.
// look into filter an object javascript

const slider = document.getElementById("distance");
const gravelSurface = document.getElementById("gravel");
const paved = document.getElementById("paved");
const form = document.querySelector(".submit");
const hill = document.getElementById("hills");
const flat = document.getElementById("flat");
const military = document.getElementById("yes");
const nonMilitary = document.getElementById("no");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let sliderValue = slider.value;
  let surfaceValue = undefined;
  let hillValue = undefined;
  let milValue = undefined;
  if (gravelSurface.checked) {
    surfaceValue = gravelSurface.id;
  } else if (paved.checked) {
    surfaceValue = paved.id;
  } else {
    alert("Please select a surface type");
  }

  if (hill.checked) {
    hillValue = hill.id;
  } else if (flat.checked) {
    hillValue = flat.id;
  } else {
    alert("Please select if you want hills or not.");
  }
  if (military.checked) {
    milValue = yes.id;
  } else if (nonMilitary.checked) {
    milValue = no.id;
  } else {
    alert("Please select if you want to go to base today.");
  }
  console.log(sliderValue);
  console.log(surfaceValue);
  console.log(hillValue);
  console.log(milValue);
  // `/trails?hills=${hillValue}&` add rest to make query params work
  fetch(`/trails`)
    .then((response) => {
      return response.json();
    })
    .then((trails) => {
      trailContainer.innerText = "";
      for (let trail of trails) {
        if (
          trail.distance >= sliderValue &&
          trail["hard_surface"] === surfaceValue &&
          trail.hills === hillValue &&
          trail["military_id_needed"] === milValue
        ) {
          const p = document.createElement("p");
          p.innerText = trail.name;
          trailContainer.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
          trailContainer.style.borderColor = "#ccc";
          trailContainer.append(p);
          console.log("creating paragraph");
        }
      }
    });
});

const suggest = document.getElementById("suggestionform");

suggest.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const suggestionValue = formData.get("text");

  const requestBody = {
    suggestion: suggestionValue,
  };

  console.log(requestBody);

  fetch(`/trailsuggest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data created: ", data);
    });
});
