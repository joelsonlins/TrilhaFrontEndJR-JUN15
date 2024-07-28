const content = document.querySelector('[data-shrink="yes"]');

const span = document.querySelector('[data-shrink="yes"] span');

span.classList.add("aparecer");

setInterval(function () {
  content.classList.toggle("shrink");
}, 5000);

setTimeout(function () {
  setInterval(function () {
    span.classList.toggle("aparecer");
  }, 5000);
}, 200);

//Fazer botão desaparecer

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("vamosconversar");

  const floatingButton = document.getElementById("div__fixa");

  function checkBannerVisibility() {
    const bannerRect = banner.getBoundingClientRect();

    if (bannerRect.bottom < 0 || bannerRect.top > window.innerHeight) {
      floatingButton.style.display = "flex";
    } else {
      floatingButton.style.display = "none";
    }
  }

  window.addEventListener("scroll", checkBannerVisibility);

  window.addEventListener("resize", checkBannerVisibility);

  checkBannerVisibility();
});

// Botão mudança de tema

let tema = document.getElementById('tema');
let body = document.querySelector('body');
let header = document.querySelector('header');
let titulo = document.querySelector('h1');
let paragrafos = document.querySelectorAll('p');
let subtitulos = document.querySelectorAll('h2');
let labels = document.querySelectorAll('label');
let inputs = document.querySelectorAll('input');
let textareas = document.querySelectorAll('textarea');
let botoesContato = document.querySelectorAll('.btn__contato');
let logoImgs = document.querySelectorAll('.logo__img'); 




tema.addEventListener('click', () => {
  tema.classList.toggle('tema__dark');
  body.classList.toggle('tema__dark');
  header.classList.toggle('tema__dark');
  titulo.classList.toggle('tema__dark');

  // Alterando os parágrafos
  paragrafos.forEach(paragrafo => {
    paragrafo.classList.toggle('tema__dark');
  });

  // Alterando os subtítulos
  subtitulos.forEach(subtitulo => {
    subtitulo.classList.toggle('tema__dark');
  });

  // Alterando os labels
  labels.forEach(label => {
    label.classList.toggle('tema__dark');
  });

  // Alterando os inputs
  inputs.forEach(input => {
    input.classList.toggle('tema__dark');
  });

  // Alterando os textareas
  textareas.forEach(textarea => {
    textarea.classList.toggle('tema__dark');
  });

  // Alterando a classe dos botões de contato
  botoesContato.forEach(botao => {
    if (botao.classList.contains('btn__contato')) {
      botao.classList.replace('btn__contato', 'btn__contato__dark');
    } else {
      botao.classList.replace('btn__contato__dark', 'btn__contato');
    }
  });

  // Alterando o logotipo
  logoImgs.forEach(logoImg => {
    if (body.classList.contains('tema__dark')) {
      logoImg.src = 'src/images/logo_dark.PNG';
    } else {
      logoImg.src = 'src/images/logo.PNG'; 
    }
  });
});



// Formulário de contato

class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }
  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML - this.settings.error;
  }

  getFormObject(){
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event){
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error){
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form)
      this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();

//Menu mobile
let btnMenu = document.getElementById('btn__menu__mobile')
let menu = document.getElementById('menu__mobile')
let overlay = document.getElementById('overlay__menu')

btnMenu.addEventListener('click', ()=> {
  menu.classList.add('open__menu')
})

menu.addEventListener('click', ()=> {
  menu.classList.remove('open__menu')
})

overlay.addEventListener('click', ()=> {
  menu.classList.remove('open__menu')
})