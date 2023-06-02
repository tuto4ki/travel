function onClickRegister() {
  const titlePopUp = document.querySelector('#pop-up-title');
  const socialMedia = document.querySelector('#pop-up-socialMeadia');
  const footerR = document.querySelector('#pop-up-footer-register');
  const footerL = document.querySelector('#pop-up-footer-log-in');
  const forgetLink = document.querySelector('#pop-up-forget');
  const btnSignIn = document.querySelector('#btn-sign-in');
  titlePopUp.innerHTML = titlePopUp.innerHTML === 'Create account' ? 'Log in to your account' : 'Create account';
  btnSignIn.innerHTML = btnSignIn.innerHTML === 'Sign In' ? 'Sign Up' : 'Sign In';
  socialMedia.classList.toggle('hidden');
  footerL.classList.toggle('hidden');
  footerR.classList.toggle('hidden');
  forgetLink.classList.toggle('hidden');
  document.forms.login.elements.Email.value = '';
  document.forms.login.elements.password.value = '';
}

function onSubmitForm() {
  const form = document.forms.login;
  alert('E-mail: ' + form.elements.Email.value + '\nPassowrd: '+ form.elements.password.value);
}