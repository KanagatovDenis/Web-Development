(function submitForm(formSelector) {
  const form = document.querySelector(formSelector);
  const formAfter = getComputedStyle(form, '::after').display;
  console.log(formAfter);
  form.onsubmit = (e) => {
    e.preventDefault();
    form.querySelector('button').blur();
    form.classList.add('form_is-after-visible');
    setTimeout(() => {
      form.classList.remove('form_is-after-visible');
    }, 4000);
  };
})('form');
