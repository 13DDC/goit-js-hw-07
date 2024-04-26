function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  container.innerHTML = '';
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    (box.style.width = `${size}px`),
      (box.style.height = `${size}px`),
      (box.style.background = getRandomHexColor());
    container.appendChild(box);
    size += 10;
  }
}
const btnCreate = document.querySelector(`button[data-create]`);
const input = document.querySelector(`input[type="number"]`);
const container = document.querySelector('#boxes');
const btnDestroy = document.querySelector(`button[data-destroy]`);
btnCreate.addEventListener('click', () => {
  const min = parseInt(input.getAttribute('min'));
  const max = parseInt(input.getAttribute('max'));
  console.log(min);
  if (isNaN(input.value) || input.value < min || input.value > max) {
    input.value = '';
    return;
  } else {
    createBoxes(input.value);
    input.value = '';
  }
});
btnDestroy.addEventListener('click', () => {
  container.innerHTML = '';
});
