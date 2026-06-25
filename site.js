const toggle = document.querySelector("[data-theme-toggle]");

if (toggle) {
  toggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-filter");
    document.querySelectorAll("[data-topic]").forEach((item) => {
      item.hidden = value !== "all" && item.getAttribute("data-topic") !== value;
    });
  });
});
