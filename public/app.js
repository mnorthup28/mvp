console.log("here");
fetch("/trailDB").then((response) => {
  console.log(response);
  return response.json();
});
//   .then((trails) => {
//     for(let trail of trails) {
//         const p = document.createElement('p')
//         p.innerText =
//     }
//   });
