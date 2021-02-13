const setCookie = (name, value, date) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + date);
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

export const initCookieBanner = () => {
  const cookieBanner = document.querySelector(".js_cookie");

  if (cookieBanner) {
    cookieBanner.addEventListener("click", function (e) {
      const target = e.target;

      if (target && target.classList.contains("js_cookie_accept")) {
        target.closest(".js_cookie").remove();

        setCookie("accepted_cookie", "1", 5 * 365 * 24 * 60 * 60 * 1000);
      }
    });
  }
};
