const container = document.querySelector(".container");
const cursor  = document.querySelector(".cursorNew");

container.addEventListener("mousemove", e=>{
    cursor.style.setProperty("--x", `${e.clientX}px`);
    cursor.style.setProperty("--y", `${e.clientY}px`);
    cursor.style.opacity = "1"
})
container.addEventListener("mouseout", e=>{
    cursor.style.opacity = "0"
})