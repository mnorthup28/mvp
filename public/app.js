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

const form = document.getElementsByClassName("submit");
form.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("hello");
});
//   fetch("/trails")
//     .then((response) => {
//       return response.json();
//     })
//     .then((trails) => {
//       for (let trail of trails) {
//         const p = document.createElement("p");
//         p.innerText = trail.name;
//         document.body.append(p);
//       }
//     });
// });

// const form = document.
//   fetch("/trails/:id", {
//     method: "GET",
//   })
