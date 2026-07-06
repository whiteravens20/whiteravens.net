// Scroll-triggered reveals for [data-reveal] elements.
// Falls back to showing everything immediately when the user prefers reduced
// motion or IntersectionObserver is unavailable.

const targets = document.querySelectorAll('[data-reveal]');

if (
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  !('IntersectionObserver' in window)
) {
  targets.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 },
  );
  targets.forEach((el) => observer.observe(el));
}
