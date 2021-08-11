let toggle_btn;
let big_wrapper;
const main = document.querySelector('main');

let dark = false;

function declare() {
  toggle_btn = document.querySelector('.toggle-btn');
  big_wrapper = document.querySelector('.big-wrapper');
}

declare();

function toggleAnimation() {
  // clone the wrapper.  Need to set deep parameter to true to include all of
  // the descendants of the node(element)
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);

  if (dark) {
    clone.classList.remove('light');
    clone.classList.add('dark');
  } else {
    clone.classList.remove('dark');
    clone.classList.add('light');
  }
  clone.classList.add('copy');

  main.appendChild(clone);

  document.body.classList.add('stop-scroll');

  clone.addEventListener('animationend', () => {
    document.body.classList.remove('stop-scroll');
    big_wrapper.remove();
    clone.classList.remove('copy');
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener('click', toggleAnimation);
}

events();
