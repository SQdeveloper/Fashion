const img = document.querySelectorAll(".scenery__contImg-img");
const imgReduced1 = document.querySelectorAll(".scenery__img-reduced-1");
const imgReduced2 = document.querySelectorAll(".scenery__img-reduced-2");

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
