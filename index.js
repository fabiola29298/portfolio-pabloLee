const d = document,
panelButton = ".panel-btn",
panel = ".panel",
menuLink = ".menu",
iconMenu = ".icon-menu";

d.addEventListener("DOMContentLoaded", (e) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelButton) || e.target.matches(`${panelButton} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelButton).classList.toggle("is-active");
      if (d.querySelector(iconMenu).src === "https://i.ibb.co/crQFs3K/icon-menu.png"){
        d.querySelector(iconMenu).src = "https://i.ibb.co/sWmSD0F/Vector.png";
      }
      else{
        d.querySelector(iconMenu).src = "https://i.ibb.co/crQFs3K/icon-menu.png";
      }
    }
    if (e.target.matches(menuLink) || e.target.matches(`${menuLink} *`)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelButton).classList.remove("is-active");
      d.querySelector(iconMenu).src = "https://i.ibb.co/crQFs3K/icon-menu.png";
    }
  })
});