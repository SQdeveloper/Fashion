const img = document.querySelectorAll(".scenery__contImg-img");
const imgReduced1 = document.querySelectorAll(".scenery__img-reduced-1");
const imgReduced2 = document.querySelectorAll(".scenery__img-reduced-2");
const sceneryImg = document.querySelectorAll(".scenery__contImg-img"); 
const cursor = document.querySelector(".cursor");
const animalsImg = document.querySelectorAll(".animals__img");
const othersImg = document.querySelectorAll(".others__contImg");


othersImg.forEach(img =>{
    img.addEventListener("mousemove", (event)=>{
        cursor.style.setProperty("--x", `${event.clientX}px`);
        cursor.style.setProperty("--y", `${event.clientY}px`);
        cursor.style.opacity = "1"
    });

    img.addEventListener("mouseout", ()=>{
        cursor.style.opacity = "0";
    });
});

animalsImg.forEach(img =>{
    img.addEventListener("mousemove", (event)=>{
        cursor.style.setProperty("--x", `${event.clientX}px`);
        cursor.style.setProperty("--y", `${event.clientY}px`);
        cursor.style.opacity = "1"
    });

    img.addEventListener("mouseout", ()=>{
        cursor.style.opacity = "0";
    });
});

sceneryImg.forEach(scener=>{
    scener.addEventListener("mousemove", (event)=>{
        cursor.style.setProperty("--x", `${event.clientX}px`);
        cursor.style.setProperty("--y", `${event.clientY}px`);
        cursor.style.opacity = "1"
    });

    scener.addEventListener("mouseout", ()=>{
        cursor.style.opacity = "0";
    });
});



//efecto grayscale en las imagenes de la sección scenery
function callback(entries) {
    entries.forEach((entry)=>{
        if(entry.isIntersecting == true){
            entry.target.style.filter = "grayscale(0)";
            imgReduced1[0].style.opacity = "1";
            imgReduced1[1].style.opacity = "1";
            imgReduced2[0].style.opacity = "1";
            imgReduced2[1].style.opacity = "1";
        }
    });
        // imgReduced[0].style.transform = "translateX(-50%)";
}

let observer = new IntersectionObserver(callback, { threshold: .5 });

img.forEach((im)=>{
    observer.observe(im);
})
