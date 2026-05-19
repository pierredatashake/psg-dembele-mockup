(() => {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('[data-track]');
  const prev = carousel.querySelector('[data-prev]');
  const next = carousel.querySelector('[data-next]');

  const step = () => {
    const card = track.querySelector('.product-card');
    if (!card) return 320;
    return card.getBoundingClientRect().width + 20;
  };

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -step() * 2, behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: step() * 2, behavior: 'smooth' });
  });

  const updateButtons = () => {
    const max = track.scrollWidth - track.clientWidth - 4;
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft >= max;
    prev.style.opacity = prev.disabled ? 0.4 : 1;
    next.style.opacity = next.disabled ? 0.4 : 1;
  };

  track.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
})();
