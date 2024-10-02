const container = document.querySelector('#container');

function createElement(i) {
  const div = document.createElement('div');
  div.className = `children ${i % 2 === 0 ? 'par' : ''}`;
  div.textContent = "\u{26f1}";
  return div;
}

for (let i = 1; i <= 5; i++) {
  container.appendChild(createElement(i));
}

const evenElements = container.querySelectorAll('.children.par');

const toggleTransform = (event) => {
  event.target.classList.toggle('transform');
};

evenElements.forEach(element => {
  element.addEventListener('mouseenter', toggleTransform);
  element.addEventListener('mouseleave', toggleTransform);
});




