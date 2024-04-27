function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyType = document.querySelector('body');
const spanText = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');
btnColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyType.style.background = randomColor;
  spanText.textContent = randomColor;
});
