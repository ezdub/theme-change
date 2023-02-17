function themeSelect() {
  (function (theme = localStorage.getItem("theme")) {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", theme);
      document.body.classList.add(theme);
      var optionToggler = document.querySelector("select[data-choose-theme] [value='" + theme.toString() + "']");
      if (optionToggler) {
        [...document.querySelectorAll("select[data-choose-theme] [value='" + theme.toString() + "']")].forEach((el) => {
          el.selected = true;
        });
      }
    }
  })();
  if (document.querySelector('select[data-choose-theme]')) {
    [...document.querySelectorAll("select[data-choose-theme]")].forEach((el) => {
      el.addEventListener('change', function () {
        document.documentElement.setAttribute("data-theme", this.value);
        document.body.classList.remove("dark","light","auto");
        document.body.classList.add(this.value);
        localStorage.setItem("theme", document.documentElement.getAttribute('data-theme'));
        [...document.querySelectorAll("select[data-choose-theme] [value='" + localStorage.getItem("theme") + "']")].forEach((el) => {
          el.selected = true;
        });
      });
    });
  }
}