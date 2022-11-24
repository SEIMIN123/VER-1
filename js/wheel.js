window.onload = function () {
  const section = document.querySelectorAll(".section");
  const sectionCou = section.length;

  // --------------------------------------------------------

  section.forEach(function (i, index) {
    i.addEventListener("mousewheel", function (event) {
      event.preventDefault();
      let data = 0;

      if (event) event = window.event;
      if (event.wheelDelta) {
        data = event.wheelDelta;

        if (window.opera) data = -data;
      } else if (event.detail) data = -event.detail;

      let moveTop = window.scrollY;
      let sectionSel = section[index];

      // -----------------------------------------------------

      if (data < 0) {
        if (sectionSel !== sectionCou - 1) {
          try {
            moveTop =
              window.pageYOffset +
              sectionSel.nextElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      } else {
        if (sectionSel !== 0) {
          try {
            moveTop =
              window.pageYOffset +
              sectionSel.previousElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }
      // ---------------------------------------------------

      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    });
  });
};

// -------------------------------------------------------

const btn1 = document.querySelector('side1');
const btn2 = document.querySelector('side2');
const btn3 = document.querySelector('side3');
const btn4 = document.querySelector('side4');
const btn5 = document.querySelector('side5');
const section = document.querySelectorAll(".section");


btn1.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

btn2.addEventListener('click', () => {
    scrollTo({
        top: 961,
        behavior: "smooth"
    });
});

btn3.addEventListener('click', () => {
    scrollTo({
        top: 1922,
        behavior: "smooth"
    });
});

btn4.addEventListener('click', () => {
    scrollTo({
        top: 2886,
        behavior: "smooth"
    });
});

s