document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#FF5733";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "white";
    });
  });
});

