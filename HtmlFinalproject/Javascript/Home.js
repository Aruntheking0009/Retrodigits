const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector("#toggle");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (openSideBar) {
    menu.checked = true;
    sidebarSubSections.forEach((subsection) => {
      subsection.classList.remove("active");
    });
    openSideBar = false;
  }
});

let openSideBar = false;

const sidebarMain = document.querySelector("#sidebar");
const sidebarSections = [...document.querySelectorAll("[data-sidebar")];
console.log(sidebarSections);

const sidebarSubSections = [...document.querySelectorAll("[data-subsidebar")];
console.log(sidebarSubSections);

sidebarSections.forEach((section) => {
  section.addEventListener("click", (e) => {
    e.preventDefault();
    openSideBar = true;

    console.log(openSideBar);

    let currentSubSidebar = sidebarSubSections.find((subsection) => {
      console.log(subsection.dataset.subsidebar);
      console.log(e.target.dataset.sidebar);
      return subsection.dataset.subsidebar == e.target.dataset.sidebar;
    });
    sidebarMain.classList.remove("active");
    currentSubSidebar.classList.add("active");
  });
});