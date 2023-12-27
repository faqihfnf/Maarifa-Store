// ? toggle hamburger active
const navbarNav = document.querySelector(".navbar-nav");

// ? ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// ? toggle search active
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ? ketika search icon di klik
document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//? toggle shooping cart active
const shopCart = document.querySelector(".shopping-cart");

//? ketika shooping cart icon di klik
document.querySelector("#shooping-cart-btn").onclick = (e) => {
  shopCart.classList.toggle("active");
  e.preventDefault();
};

// ? klik di luar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-btn");
const shopCartBtn = document.querySelector("#shooping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shopCartBtn.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove("active");
  }
});

// // ? Modal Box

// const itemDetailModal = document.querySelector("#item-detail-modal");

// const itemDetailBtns = document.querySelectorAll(".item-detail-btn");

// itemDetailBtns.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal.style.display = "flex";
//     e.preventDefault();
//   };
// });

// //? Close Modal
// document.querySelector(".modal .close-icon").onclick = (e) => {
//   itemDetailModal.style.display = "none";
//   e.preventDefault();
// };

// window.onclick = (e) => {
//   if (e.target == itemDetailModal) {
//     itemDetailModal.style.display = "none";
//   }
// };
