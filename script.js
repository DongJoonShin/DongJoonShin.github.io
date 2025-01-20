const button = document.querySelector('.runaway-button');
button?.addEventListener('mouseover', () => {
  button.style.transform = `translate(${Math.random() * 200}px, ${
    Math.random() * 200
  }px)`;
});
