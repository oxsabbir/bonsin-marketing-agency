export const observerAnimate = function () {
  const allSection = document.querySelectorAll(".anim");
  const observerCb = (entry, observer) => {
    entry.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animeShow");
      } else {
        entry.target.classList.add("animeHidden");
      }
    });
  };
  const observer = new IntersectionObserver(observerCb, {
    threshold: [0.2],
    root: null,
  });

  allSection.forEach((section) => observer.observe(section));
};
