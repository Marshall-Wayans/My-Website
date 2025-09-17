document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.3
    }
  );

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => observer.observe(card));
});