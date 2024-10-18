(function () {

  function moveSmooth() {
    const allLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of allLinks) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };
  }


  function checkNumber(num) {
    if (num.length === 0) {
      return false;
    } else {
      const re = /^[\d\+][\d\(\)\ -]{4,17}$/;
      let result = re.test(num);
      return result;
    }
  }


  function checkName(names) {
    if (names.length >= 2) {
      return true;
    } else {
      return false;
    }
  }


  function start() {

    moveSmooth();

    const btn = document.getElementsByClassName('form__btn');

    btn[0].addEventListener('click', function (e) {
      e.preventDefault();

      let checkInputName = document.getElementsByClassName('contacts__link--name');
      let checkInputTel = document.getElementsByClassName('contacts__link--tel');
      let labelErrorName = document.getElementsByClassName('form__label--name');
      let labelErrorTel = document.getElementsByClassName('form__label--tel');

      const tel = checkInputTel[0].value.trim();
      const name = checkInputName[0].value.trim();

      const checkTel = checkNumber(tel);
      const checkNames = checkName(name);

      if (!checkNames) {
        labelErrorName[0].textContent = 'Недопустимый формат';
        checkInputName[0].style.setProperty('border-color', '#D11616');
      } else {
        labelErrorName[0].textContent = '';
        checkInputName[0].style.setProperty('border-color', '#333333');
      }

      if (!checkTel) {
        labelErrorTel[0].textContent = 'Недопустимый формат';
        checkInputTel[0].style.setProperty('border-color', '#D11616');
      } else {
        labelErrorTel[0].textContent = '';
        checkInputTel[0].style.setProperty('border-color', '#333333');
      }
    })
  }

  start();

})();
