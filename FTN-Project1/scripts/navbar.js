const toggle = document.getElementsByClassName("toggle")[0];
const pages = document.getElementsByClassName("pages")[0];

toggle.addEventListener("click", () => {
  pages.classList.toggle("aktiviraj");
});
