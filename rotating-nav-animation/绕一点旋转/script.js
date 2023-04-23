

const c = document.getElementById("open");
const open = document.getElementById("close");
const container = document.querySelector(".container")

c.addEventListener('click',()=>{
    container.classList.add("show-nav");
})

open.addEventListener("click", () => {
  container.classList.remove("show-nav");
});


