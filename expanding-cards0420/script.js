
const panels =document.querySelectorAll(".panel");


panels.forEach(p => {
  p.addEventListener("click", () => {
     removeEveryActive();
     p.classList.add("active");
    
  });
});

function removeEveryActive() {
  panels.forEach(p => {
    p.classList.remove("active");
  });
}

// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }