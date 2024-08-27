
/*ESTO @ts-check ESTÁ GENERANDO EL CONFLICTO CON EL SIMBOLO DE JQUERY, no sesi comenzastes a trabajar con TypeScript y luego lo dejastes, o reutilizastes un archivo, pero es lo que está generando la alerta en visual.Te recomiendo que lo elimines */
// CREACION DE CARD - ARREGLO
function crearTarjetaProyecto(proyect) {
    return `
      <div class="col-md-4 mb-4">
        <div class="project card">
          <img src="${proyect.image}" class="card-img-top" alt="${proyect.title}">
          <div class="card-body">
            <h5 class="card-title">${proyect.name}</h5>
            <p class="card-text">${proyect.description}</p>
            <a href="${proyect.link}" target="_blank" class="btn btn-primary">Ver proyecto</a>
          </div>
        </div>
      </div>
    `;
  }

  const projectSeccion = document.querySelector('#project')

const arrayProject = [
{name: "Demo Cajero Automatico", title: "Simulador de Cajero Automático en JavaScript", image: "https://media.istockphoto.com/id/701002580/es/vector/cajero-en-banco-u-oficina-concepto-de-vector.jpg?s=612x612&w=0&k=20&c=iXEzqrikHoNSPAPJVPf2DmpF8KFTxe7noPqfXDK62hg=", description:"Explore nuestra implementación de un Cajero Automático virtual, desarrollado íntegramente en JavaScript. Este proyecto demuestra la capacidad de crear una aplicación interactiva y funcional utilizando únicamente las funciones prompt() y alert().", link: "assets/proyectos/evaluacion 8/index.html",},
{name: "Mascotas en Foco", title: "Galería Dinámica: Mascotas en Foco", image: "assets/img/MosaicoAnimal.png", description:"Descubra nuestra cautivadora galería de imágenes dedicada a perros y gatos, un proyecto que fusiona diseño responsivo con el encanto de nuestras mascotas favoritas.", link: "assets/proyectos/MATERIAL COMPLEMENTARIO EVALUACIÓN MÓDULO 4/index.html"},
{name: "Supermercado interactivo", title: "Desarrollo Web de Supermercado: Experiencia Interactiva y Responsiva", image: "assets/img/SuperMarket.png", description:"Creación de una plataforma web moderna para supermercado, combinando Bootstrap, jQuery, CSS y JavaScript. El sitio ofrece una experiencia de compra fluida y adaptable a todos los dispositivos.", link: "assets/proyectos/yosneili-SM/supermercado-/index.html"},
]
arrayProject.forEach(proyect => {
    const tarjetaHTML = crearTarjetaProyecto(proyect);
    if(projectSeccion != null){
      projectSeccion.innerHTML += tarjetaHTML
  }
  });


// Carousel
$(document).ready(function () {
  if ($('#news-slider').length) {
      $("#news-slider").owlCarousel({
          items: 3,
          itemsDesktop: [1199, 3],
          itemsDesktopSmall: [980, 2],
          itemsMobile: [600, 1],
          navigation: true,
          navigationText: ["", ""],
          pagination: true,
          autoPlay: true
      });
  }
});

// Menu responsive Social
const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})

// Formulario - formulario

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorElements = document.querySelectorAll('.error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  errorElements.forEach(error => {
    error.classList.remove('active');
  });

  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    document.getElementById('nameError').textContent = 'Por favor, ingresa tu nombre.';
    document.getElementById('nameError').classList.add('active');
  }

  if (surname === '') {
    document.getElementById('surnameError').textContent = 'Por favor, ingresa tu apellido.';
    document.getElementById('surnameError').classList.add('active');
  }


});
