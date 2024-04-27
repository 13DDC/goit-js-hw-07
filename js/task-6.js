const btnCreate = document.querySelector(`button[data-create]`);
const input = document.querySelector(`input[type="number"]`);
const container = document.querySelector('#boxes');
const btnDestroy = document.querySelector(`button[data-destroy]`);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  container.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    container.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${30 + 10 * i}px; height: ${
        30 + 10 * i
      }px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
}
btnCreate.addEventListener('click', () => {
  const amountBox = input.value;
  if (amountBox >= 1 && amountBox <= 100) {
    createBoxes(amountBox);
  } else {
    alert('Кількість має бути від 1 до 100, введіть ще раз');
  }
  input.value = '';
});
btnDestroy.addEventListener('click', () => {
  container.innerHTML = '';
});
