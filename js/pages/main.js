import { isDesktop } from "../helpers/is-desktop";

const OPENED_SUBMENU = "submenu--opened";
const ACTIVE_CATEGORY = "categories__item--active";

function toggleMenu() {
  const menu = document.querySelector(".js_menu");

  if (menu) {
    this.classList.toggle("hamburger--opened");
    menu.classList.toggle("menu--opened");
  }
}

const hideMenu = () => {
  const menuItems = document.querySelectorAll(".js_submenu");

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.add("hide");
  }
};

const showMenu = () => {
  const menuItems = document.querySelectorAll(".js_submenu");

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("hide");
  }
};

export const initMenuEvents = () => {
  const hamburger = document.querySelector(".js_hamburger");

  if (hamburger && !isDesktop()) {
    hamburger.addEventListener("click", toggleMenu);
  }
};

export const initSubmenuEvents = () => {
  if (!isDesktop()) {
    const menuItems = document.querySelectorAll(".js_submenu");
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", function (e) {
        e.preventDefault();
        const menuToOpen = this.nextElementSibling;

        if (menuToOpen) {
          menuToOpen.classList.add(OPENED_SUBMENU);
          hideMenu();
        }
      });
    }

    const backMenu = document.querySelectorAll(".js_back_menu");
    for (let i = 0; i < backMenu.length; i++) {
      backMenu[i].addEventListener("click", function () {
        const currentSubmenu = this.closest(".js_submenu_list");
        currentSubmenu.classList.remove(OPENED_SUBMENU);
        showMenu();
      });
    }
  }
};

export const initCategoriesEvents = () => {
  const category = document.querySelectorAll(".js_category");
  for (let i = 0; i < category.length; i++) {
    category[i].addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      const subcategory = document.querySelectorAll(".js_subcategory");

      for (let j = 0; j < subcategory.length; j++) {
        subcategory[j].classList.add("hide");
      }
      for (let k = 0; k < category.length; k++) {
        category[k].classList.remove(ACTIVE_CATEGORY);
      }

      subcategory[index].classList.remove("hide");
      this.classList.add(ACTIVE_CATEGORY);
    });
  }
};
