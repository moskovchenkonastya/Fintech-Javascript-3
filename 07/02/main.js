const but = document.querySelector('button');
const list = document.querySelector('ol');
const timeDistance = 600;

const addItem = () => {
  const item = document.createElement('li');
  const date = new Date();

  item.textContent = `2xClick -  ${date.toDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  list.appendChild(item);
};

const doubleClick = (element, doubleClickHandler, timeDis = 100) => {
  let clickOn = true;
  let timer = 0;

  element.addEventListener('click', () => {
    if (clickOn) {
      clickOn = false;
      timer = setTimeout(() => {
        clickOn = false;
      }, timeDis);
    } else {
      clickOn = true;
      clearTimeout(timer);
      doubleClickHandler();
    }
  });
};

doubleClick(but, addItem, timeDistance);
