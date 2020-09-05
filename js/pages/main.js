import { isDesktop } from "../helpers/is-desktop";

const OPENED_SUBMENU = "submenu--opened";

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
