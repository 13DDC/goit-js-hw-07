const btnCreate = document.querySelector(`button[data-create]`);
const input = document.querySelector(`input[type="number"]`);
const container = document.querySelector('#boxes');
const btnDestroy = document.querySelector(`button[data-destroy]`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
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

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }

  container.innerHTML = '';
  container.appendChild(fragment);
}
function destroyBoxes() {
  container.innerHTML = '';
}
