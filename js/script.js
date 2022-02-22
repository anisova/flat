function ham() {
  const ham = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu-m");
  const body = document.querySelector("body");
  function toggleMenu() {
    ham.classList.toggle("active");
    menu.classList.toggle("is-active");
    body.classList.toggle("locked");
  }
  ham.addEventListener("click", function (e) {
    e.preventDefault();
    toggleMenu();
  });
  menu.addEventListener("click", function (e) {
    let target = e.target;
    if (target.className === "menu-m__link") {
      toggleMenu();
    }
  });
}
ham();

let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");
  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });
  function selectToggle() {
    // let select = document.querySelectorAll(".select");
    // select.forEach((item) => {
    //   item.classList.remove("is-active");
    // });
    this.parentElement.classList.toggle("is-active");
  }
  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};
select();
