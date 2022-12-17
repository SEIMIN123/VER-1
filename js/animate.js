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
const titleList3 = document.querySelectorAll(".box3");
const titleList2 = document.querySelectorAll(".box3-1");
const titleList4 = document.querySelectorAll(".box4");
const titleList5 = document.querySelectorAll(".box4-1");
const titleList6 = document.querySelectorAll(".box5");
const titleList7 = document.querySelectorAll(".box5-1");

titleList.forEach((el) => observer.observe(el));
titleList1.forEach((el) => observer.observe(el));
titleList2.forEach((el) => observer.observe(el));
titleList3.forEach((el) => observer.observe(el));
titleList4.forEach((el) => observer.observe(el));
titleList5.forEach((el) => observer.observe(el));
titleList6.forEach((el) => observer.observe(el));
titleList7.forEach((el) => observer.observe(el));

