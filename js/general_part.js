(function () {
  "use strict";

  const upDownBtn = document.querySelector(".up_down_btn");

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    const allHeight = document.documentElement.getBoundingClientRect().height;

    if (scrolled > coords && scrolled < allHeight / 4) {
      upDownBtn.classList.add("up_down_btn-show");
      upDownBtn.innerHTML = "&darr;";
      upDownBtn.setAttribute("title", "Вниз");
    }
    if (scrolled > allHeight / 4) {
      upDownBtn.classList.remove("up_down_btn-show");
      upDownBtn.classList.add("up_down_btn-disabled");
    }
    if (scrolled < allHeight / 4) {
      upDownBtn.classList.remove("up_down_btn-disabled");
    }
  }

  function backToTop() {
    upDownBtn.classList.add("up_down_btn-disabled");

    (function goBottom() {
      const match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);

      if (match != document.documentElement.scrollHeight) {
        window.scrollBy(0, 200);
        setTimeout(goBottom, 0);
      } else {
        upDownBtn.classList.add("up_down_btn-disabled");
      }
    })();
    return;
  }

  window.addEventListener("scroll", trackScroll);
  upDownBtn.addEventListener("click", backToTop);
})();
