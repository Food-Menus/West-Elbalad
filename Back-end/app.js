const mobile = document.querySelector(".menu-toggle");
const mobileOff = document.querySelector(".menu-off");
const mobileLink = document.querySelector(".sidebar");
mobile.addEventListener("click", function () {
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
});
mobileOff.addEventListener("click", function () {
  mobile.classList.remove("is-active");
  mobileLink.classList.remove("active");
});

const scrollableContainer = document.querySelector(".filter-wrapper");
const cards = document.querySelectorAll(".filter-card");
let isScrolling = !1;
let initialTouchPosition;
let scrollPosition;
scrollableContainer.addEventListener("mousedown", handleScrollStart);
scrollableContainer.addEventListener("touchstart", handleScrollStart);
scrollableContainer.addEventListener("mousemove", handleScrollMove);
scrollableContainer.addEventListener("touchmove", handleScrollMove);
scrollableContainer.addEventListener("mouseup", handleScrollEnd);
scrollableContainer.addEventListener("touchend", handleScrollEnd);
function handleScrollStart(event) {
  isScrolling = !0;
  if (event.type === "touchstart") {
    initialTouchPosition = event.touches[0].clientX;
  } else {
    initialTouchPosition = event.clientX;
  }
  scrollPosition = scrollableContainer.scrollLeft;
}
function handleScrollMove(event) {
  if (!isScrolling) return;
  if (event.type === "touchmove") {
    event.preventDefault();
    scrollableContainer.scrollLeft =
      scrollPosition - (event.touches[0].clientX - initialTouchPosition);
  } else {
    scrollableContainer.scrollLeft =
      scrollPosition - (event.clientX - initialTouchPosition);
  }
}
function handleScrollEnd() {
  isScrolling = !1;
}
var scrolling = !0;
var currentIndex = 0;
var stepFilter;
var step;
$(window).on("resize", function () {
  step = $(window).width();
});
$(window).trigger("resize");
$(".back").click(function (e) {
  e.preventDefault();
  currentIndex = Math.max(0, currentIndex - 1);
  $(".highlight-wrapper").animate({ scrollLeft: currentIndex * step });
});
$(".next").click(function (e) {
  e.preventDefault();
  currentIndex = Math.min(currentIndex + 1, $(".highlight-card").length - 1);
  $(".highlight-wrapper").animate({ scrollLeft: currentIndex * step });
});
$(window).on("resize", function () {
  stepFilter = $(window).width();
});
$(window).trigger("resize");
$(".back-menus").bind("click", function (e) {
  e.preventDefault();
  currentIndex = Math.max(0, currentIndex - 1);
  $(".filter-wrapper").animate({ scrollLeft: currentIndex * step });
});
$(".next-menus").bind("click", function (e) {
  e.preventDefault();
  currentIndex = Math.min(currentIndex + 1, $(".highlight-card").length - 1);
  $(".filter-wrapper").animate({ scrollLeft: currentIndex * step });
});
const button = document.getElementById("myButtoon");
const messageBox = document.getElementById("messageBox");
button.addEventListener("click", () => {
  messageBox.classList.toggle("hidden");
  messageBox.classList.toggle("show");
});
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
