let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu");
let navCloseBtn = document.querySelector("#close");
let backToTopBtn = document.querySelector("#back-to-top");

menuBtn.onclick = () => {
  navbar.classList.add("active");
};

navCloseBtn.onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = function () {
  navbarHide();
};

// function navbarHide() {
//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// }

function navbarHide() {
  if (window.scrollY > 0) {
    header.classList.add("active");
    backToTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backToTopBtn.classList.remove("active");
  }
}

function openInfo(evt, Name) {
  // Declare all variables
  evt.preventDefault();
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onload = function () {
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[0].style.display = "block";
  }
};

/**
 * Initiate glightbox
 */
const glightbox = GLightbox({
  selector: ".glightbox",
});

/**
 * Initiate Gallery Lightbox
 */
const galelryLightbox = GLightbox({
  selector: ".galelry-lightbox",
});
