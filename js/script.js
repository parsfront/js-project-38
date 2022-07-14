const sections = document.querySelectorAll("section");
const li = document.querySelectorAll("nav .container ul li");
let current;

window.addEventListener("scroll", function () {
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    li.forEach((item) => {
        item.classList.remove("active");
        if (item.classList.contains(current)) {
            item.classList.add("active");
        }
    });
});
