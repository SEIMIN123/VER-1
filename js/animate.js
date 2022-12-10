const scroll = document.querySelector(".box1");

window.addEventListener("wheel", (e) => {
  console.log(e.deltaY, e.deltaX);

});

const options = {
  root: null, 
  rootMargin: "0px",
  threshold: 0.5, 
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

const titleList = document.querySelectorAll(".box1");
const titleList1 = document.querySelectorAll(".box2");

titleList.forEach((el) => observer.observe(el));
titleList1.forEach((el) => observer.observe(el));
