let menu = document.querySelector('#menu-icon');
let menuist = document.querySelector('.menu-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menuist.classList.toggle('open');
}

// preloader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Đảm bảo hiệu ứng loading kéo dài ít nhất 3 giây
  setTimeout(() => {
    loader.style.transition = "opacity 0.5s ease-out";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Ẩn hẳn sau khi hoàn thành hiệu ứng mờ
  }, 2000); // Chờ 3 giây trước khi bắt đầu mờ dần
});

// Show password
const pwd = document.getElementById("Pwd");
const chk = document.getElementById("chk");

chk.onchange = function(e) {
    pwd.type = chk.checked ? "text" : "password";
};
