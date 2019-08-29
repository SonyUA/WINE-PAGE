let btn = document.querySelector('.burger-btn');

function burgerOpen() {
  let box = document.querySelector('#burger-box');
  let btnFigure = document.querySelector('#burger-btn_figure');
  if (box.classList.contains("burger-box") && btn.classList.contains("burger-btn")) {
    box.classList.remove('burger-box');
    box.classList.add('burger-box__open');
    btn.classList.remove('burger-btn');
    btn.classList.add('burger-btn__open');
    btnFigure.classList.remove('burger-btn_figure')
    btnFigure.classList.add('burger-btn_figure_open');
  } else {
    box.classList.remove('burger-box__open');
    box.classList.add('burger-box');
    btn.classList.remove('burger-btn__open');
    btn.classList.add('burger-btn');
    btnFigure.classList.remove('burger-btn_figure_open');
    btnFigure.classList.add('burger-btn_figure');
  }
}
btn.addEventListener('click', burgerOpen);
