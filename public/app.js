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

const form = document.querySelector(".submit");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hello");
  fetch("/trails")
    .then((response) => {
      return response.json();
    })
    .then((trails) => {
      trailContainer.innerText = "";
      for (let trail of trails) {
        const p = document.createElement("p");
        p.innerText = trail.name;
        trailContainer.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        trailContainer.style.borderColor = "#ccc";
        trailContainer.append(p);
      }
    });
});

const postForm = document.getElementById("userSubmit");
const submitValue = document.getElementsByClassName("submitValue")[0];
postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("is this working?");
  const dataToSend = {
    submitValue: submitValue.value,
  };
  fetch("/trails", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.value = "";
    });
});

// Example of how to get fetch with query params from medium.com
// fetch( 'https://domain.com/path/?param1=value1&param2=value2' )
//     .then( response => response.json() )
//     .then( response => {
//         // Do something with response.
//     } );
