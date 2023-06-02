// burger handler
(function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav-header');
  const bgPage = document.querySelector('.bg-shadow');
  const menuClose = document.querySelector('.header-nav-close');
  const navLink = document.querySelectorAll('.nav-link');
  const popup = document.querySelector(".pop-up");

  const removeClass = (e) => {
    e.stopPropagation();
    menu.classList.remove('nav-header-active');
    bgPage.classList.remove('bg-shadow-active');
  };
  
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.add('nav-header-active');
    bgPage.classList.add('bg-shadow-active');
  });
  menuClose.addEventListener('click', (e) => {
    removeClass(e);
  });


  //if(document.documentElement.clientWidth <= 390) {
    for(let i = 0; i < navLink.length; i++) {
      navLink[i].addEventListener('click', (e) => {
        removeClass(e);
      });
    }
  //}

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == burger;
    const menu_is_active = menu.classList.contains("nav-header-active");
    if (!its_menu && !its_btnMenu && menu_is_active) {
        removeClass(e);
    }
  });

 /* Start Login Popup */
  const btnLogin = document.querySelector('#btn-login');
  const accountLink = document.querySelector('#account-link');
  const popupLogin = document.querySelector('#pop-up-login');
  const formLogin = document.querySelector('#login-form');
  const socialMedia = document.querySelector('#pop-up-socialMeadia');

  const eventPopUpOpen = () => {
    formLogin.classList.toggle('login-forms-active');
    setTimeout(() => {popupLogin.classList.toggle('bg-login-shadow-active');}, 200);
  };

  btnLogin.addEventListener('click', eventPopUpOpen);
  accountLink.addEventListener('click', eventPopUpOpen);
  popupLogin.addEventListener('click', (event) => {
    if(event.target.classList.contains('bg-login-shadow-active')) {
      eventPopUpOpen();
      if(socialMedia.classList.contains('hidden')) {
        onClickRegister();
      }
      else {
        document.forms.login.elements.Email.value = '';
        document.forms.login.elements.password.value = '';
      }
    }
  });
/* End Login popup */

/* Start slider */
const BTN_LEFT = document.querySelectorAll(".btn-left");//document.documentElement.clientWidth <= 390 ? document.querySelector("#btn-left-mobile") : document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelectorAll(".btn-right");//document.documentElement.clientWidth <= 390 ? document.querySelector("#btn-right-mobile") : document.querySelector("#btn-right");
const SLIDER = document.querySelector("#slider");

let idSlider = '#' + document.querySelector('#item-active img').alt + 'Slider';
document.querySelector(idSlider).classList.add('slider-circle-item-active');

const addEventListenerBtn = (BTN_LEFT, BTN_RIGHT) => {
  BTN_LEFT[0].addEventListener("click", moveLeft);
  BTN_RIGHT[0].addEventListener("click", moveRight);
  BTN_LEFT[1].addEventListener("click", moveLeft);
  BTN_RIGHT[1].addEventListener("click", moveRight);
};

const removeEventListenerBtn = (BTN_LEFT, BTN_RIGHT) => {
  BTN_LEFT[0].removeEventListener("click", moveLeft);
  BTN_RIGHT[0].removeEventListener("click", moveRight);
  BTN_LEFT[1].removeEventListener("click", moveLeft);
  BTN_RIGHT[1].removeEventListener("click", moveRight);
};

const moveLeft = () => {
  SLIDER.classList.add("transition-left");
  removeEventListenerBtn(BTN_LEFT, BTN_RIGHT);
};

const moveRight = () => {
  SLIDER.classList.add("transition-right");
  removeEventListenerBtn(BTN_LEFT, BTN_RIGHT);
};

addEventListenerBtn(BTN_LEFT, BTN_RIGHT);

SLIDER.addEventListener("animationend", (animationEvent) => {
  let itemsAll = document.querySelectorAll(".slider-item");
  let item = document.querySelector("#item-active").innerHTML;
  if (animationEvent.animationName === "move-left") {
    SLIDER.classList.remove("transition-left");
    for(let i = 4; i > 0; i--) {
      itemsAll[i].innerHTML = itemsAll[i - 1].innerHTML;
    }
    itemsAll[0].innerHTML = item;
  } 
  else {
    SLIDER.classList.remove("transition-right");
    for(let i = 0; i < 4; i++) {
      itemsAll[i].innerHTML = itemsAll[i + 1].innerHTML;
    }
    itemsAll[itemsAll.length - 1].innerHTML = item;
  }

  document.querySelector('.slider-circle-item-active').classList.remove('slider-circle-item-active');
  let idSlider = '#' + document.querySelector('#item-active img').alt + 'Slider';
  document.querySelector(idSlider).classList.add('slider-circle-item-active');

  addEventListenerBtn(BTN_LEFT, BTN_RIGHT);
})

  /* End slider */

}());