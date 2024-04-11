function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
  
  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');
  
  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);
  
  function createBoxes() {
    const amount = Number(input.value);
    if (amount < 1 || amount > 100) {
      return;
    }
  
    destroyBoxes();
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  
    input.value = '';
  }
  
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }