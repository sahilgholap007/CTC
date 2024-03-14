
function slideIn(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else {
      entry.target.classList.remove('slide-in');
    }
  }
  

  let observer = new IntersectionObserver((entries) => {
    entries.forEach(slideIn);
  });
  

  document.querySelectorAll('.slide').forEach((slide) => {
    observer.observe(slide);
  });