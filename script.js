const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // Skill bar animation
        entry.target.querySelectorAll(".bar div").forEach(bar => {
          bar.style.width = bar.dataset.level + "%";
        });

        // Timeline dot animation
        entry.target.querySelectorAll(".timeline li").forEach(item => {
          item.classList.add("active");
        });
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
