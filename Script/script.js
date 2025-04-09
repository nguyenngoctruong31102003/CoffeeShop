let menu = document.querySelector("#menu-icon");
let menuist = document.querySelector(".menu-list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  menuist.classList.toggle("open");
};

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



// Start login Facebook Account
// window.fbAsyncInit = function () {
//   FB.init({
//     appId: "587983370944235",
//     cookie: true,
//     xfbml: true,
//     version: "v18.0",
//   });
//   FB.AppEvents.logPageView();
// };
//   (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));

// Log In
// function loginWithFacebook() {
//   FB.login(
//     function (response) {
//       if (response.authResponse) {
//         // Người dùng đã đăng nhập, lấy thông tin người dùng
//         FB.api("/me", { fields: "name,email,picture" }, function (userInfo) {
//           alert("Chào " + userInfo.name + "! Bạn đã đăng nhập bằng Facebook.");
//           console.log("User Info:", userInfo);

//           // Hiển thị thông tin lên trang web (nếu cần)
//           document.getElementById("user-info").innerHTML = `
//                     <p><strong>Tên:</strong> ${userInfo.name}</p>
//                     <p><strong>Email:</strong> ${userInfo.email}</p>
//                     <img src="${userInfo.picture.data.url}" alt="Profile Picture">
//                 `;
//         });
//       } else {
//         alert("Đăng nhập Facebook thất bại!");
//       }
//     },
//     { scope: "email,public_profile" }
//   );
// }
// LogOut
// function logoutFromFacebook() {
//   FB.logout(function (response) {
//     alert("Bạn đã đăng xuất khỏi Facebook.");
//     document.getElementById("user-info").innerHTML = ""; 
//   });
// }


// Show password
// const pwd = document.getElementById("Pwd");
// const chk = document.getElementById("chk");

// chk.onchange = function(e) {
//     pwd.type = chk.checked ? "text" : "password";
// };
