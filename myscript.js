// --- Combined "How We Work" Animations ---
document.addEventListener("DOMContentLoaded", () => {
  // Work item animation
  const workItems = document.querySelectorAll('.work-item1, .work-item2');
  const workItemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  workItems.forEach(item => workItemObserver.observe(item));

  // Title animation
  const titleSection = document.querySelector(".how-we-work .title");
  const titleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.5 });

  if (titleSection) {
    titleObserver.observe(titleSection);
  }
});
// --- End Combined Animations ---

// --carousel start --


// carousel end
