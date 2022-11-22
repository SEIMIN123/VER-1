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
