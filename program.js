let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu = document.getElementById("sideMenu");

var openMenu = () => {
  sideMenu.style.right = "0px";
};
var closeMenu = () => {
  sideMenu.style.right = "-200px";
};

window.addEventListener("scroll", function () {
  let Nav = document.getElementById("navbar");
  if (window.pageYOffset >= 34) {
    Nav.classList.add("sticky");
  } else {
    Nav.classList.remove("sticky");
  }
});
