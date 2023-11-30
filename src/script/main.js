// 🍕 --------------------> dom elements
const loading = document.querySelector("#loading");
const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector("#navigation");

// 🍕 --------------------> navigation for small screen only
hamburger.addEventListener("click", ()=> { navigation.classList.toggle("navigation--active"); });

// 🍕 --------------------> loading screen
window.addEventListener("load", loading.classList.add("loading--hide"));
