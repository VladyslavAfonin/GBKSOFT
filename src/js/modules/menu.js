export default () => {
  const main = document.querySelector(".main");
  const sidebar = document.querySelector(".sidebar");
  const menuToggle = document.querySelector(".sidebar__hamburger");
  const arrow = document.querySelector(".btn-hidden-menu");

  menuToggle.addEventListener("click", function (e) {
    main.classList.toggle("active");
    sidebar.classList.toggle("active");
    arrow.classList.toggle('active');
  });

  arrow.addEventListener("click", function (e) {
    main.classList.remove("active");
    sidebar.classList.remove("active");
    arrow.classList.remove('active');
  });
};
