const scroll = document.querySelector(".box1");

window.addEventListener("wheel", (e) => {
  console.log(e.deltaY, e.deltaX);

  if (e.deltaY > 100) {
    Element.classList.add("active");
  }
});

const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.5, // 50%가 viewport에 들어와 있어야 callback 실행
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

// 반복문을 돌려 모든 DOM에 적용
titleList.forEach((el) => observer.observe(el));
titleList1.forEach((el) => observer.observe(el));
