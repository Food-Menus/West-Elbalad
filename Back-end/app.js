// تحديد العناصر الصحيحة
const mobileMenuButton = document.querySelector(".menu-toggle");
const mobileMenuCloseButton = document.querySelector(".menu-off");
const mobileMenuSidebar = document.querySelector(".sidebar");
const messageToggleButton = document.getElementById("messageBox");
const messageBoxElement = document.getElementById("messageBox");
const navigationMenuButton = document.querySelector(".menu-btn"); // افترض أن لديك زر قائمة تنقل
const navigationLinks = document.querySelector(".nav-links"); // افترض أن لديك قائمة تنقل
const navigationMenuIcon = document.querySelector(".menu-btn i"); // افترض أن لديك أيقونة زر القائمة

mobileMenuButton.addEventListener("click", function () {
    mobileMenuButton.classList.toggle("is-active");
    mobileMenuSidebar.classList.toggle("active");
});

mobileMenuCloseButton.addEventListener("click", function () {
    mobileMenuButton.classList.remove("is-active");
    mobileMenuSidebar.classList.remove("active");
});

const filterContainer = document.querySelector(".filter-wrapper");
const filterCards = document.querySelectorAll(".filter-card");
let isFilterScrolling = false;
let filterTouchStart;
let filterScrollPosition;

filterContainer.addEventListener("mousedown", handleFilterScrollStart);
filterContainer.addEventListener("touchstart", handleFilterScrollStart);
filterContainer.addEventListener("mousemove", handleFilterScrollMove);
filterContainer.addEventListener("touchmove", handleFilterScrollMove);
filterContainer.addEventListener("mouseup", handleFilterScrollEnd);
filterContainer.addEventListener("touchend", handleFilterScrollEnd);

function handleFilterScrollStart(event) {
    isFilterScrolling = true;
    if (event.type === "touchstart") {
        filterTouchStart = event.touches[0].clientX;
    } else {
        filterTouchStart = event.clientX;
    }
    filterScrollPosition = filterContainer.scrollLeft;
}

function handleFilterScrollMove(event) {
    if (!isFilterScrolling) return;
    if (event.type === "touchmove") {
        event.preventDefault();
        filterContainer.scrollLeft = filterScrollPosition - (event.touches[0].clientX - filterTouchStart);
    } else {
        filterContainer.scrollLeft = filterScrollPosition - (event.clientX - filterTouchStart);
    }
}

function handleFilterScrollEnd() {
    isFilterScrolling = false;
}

let currentHighlightIndex = 0;
let highlightStep;
let windowWidth;

$(window).on("resize", function () {
    windowWidth = $(window).width();
});

$(window).trigger("resize");

$(".back").click(function (e) {
    e.preventDefault();
    currentHighlightIndex = Math.max(0, currentHighlightIndex - 1);
    $(".highlight-wrapper").animate({ scrollLeft: currentHighlightIndex * windowWidth });
});

$(".next").click(function (e) {
    e.preventDefault();
    currentHighlightIndex = Math.min(currentHighlightIndex + 1, $(".highlight-card").length - 1);
    $(".highlight-wrapper").animate({ scrollLeft: currentHighlightIndex * windowWidth });
});

$(window).on("resize", function () {
    highlightStep = $(window).width();
});

$(window).trigger("resize");

$(".back-menus").on("click", function (e) {
    e.preventDefault();
    currentHighlightIndex = Math.max(0, currentHighlightIndex - 1);
    $(".filter-wrapper").animate({ scrollLeft: currentHighlightIndex * highlightStep });
});

$(".next-menus").on("click", function (e) {
    e.preventDefault();
    currentHighlightIndex = Math.min(currentHighlightIndex + 1, filterCards.length - 1);
    $(".filter-wrapper").animate({ scrollLeft: currentHighlightIndex * highlightStep });
});

messageToggleButton.addEventListener("click", () => {
    messageBoxElement.classList.toggle("hidden");
    messageBoxElement.classList.toggle("show");
});

if(navigationMenuButton){
    navigationMenuButton.addEventListener("click", (e) => {
        navigationLinks.classList.toggle("open");
        const isNavigationOpen = navigationLinks.classList.contains("open");
        navigationMenuIcon.setAttribute("class", isNavigationOpen ? "ri-close-line" : "ri-menu-line");
    });
}