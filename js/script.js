//Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//PRofile html
var content =
  "<div class='profile-name'><p>Staff Engineer</p>\
    <a href='#'><ion-icon class='profile-close-icon' name='close-outline'></ion-icon></div></a>\
    <div class='section-tweet'>\
    <img class='profile-image' src='./img/ben.jpg' alt='No image' />\
    <p class='name'>Christopher Wang</p>\
    <p class='id'>@christopherwang</p>\
    <div class='tweet-details'>\
      <p class='tweet-text'>Tweets</p>\
      <p class='tweet-text'>Following</p>\
      <p class='tweet-text'>Followers</p>\
      <a href='#!' class='tweet-value'>12</a>\
      <a href='#!' class='tweet-value'>23</a>\
      <a href='#!' class='tweet-value'>45</a>\
    </div>\
  </div>";

const section = document.querySelectorAll(".section");
section.forEach((element) => {
  element.innerHTML = content;
});
