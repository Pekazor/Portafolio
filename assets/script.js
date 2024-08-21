// @ts-check


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
{name: "Demo Cajero Automatico", title: "Simulador de Cajero Automático en JavaScript", image: "", description:"Explore nuestra implementación de un Cajero Automático virtual, desarrollado íntegramente en JavaScript. Este proyecto demuestra la capacidad de crear una aplicación interactiva y funcional utilizando únicamente las funciones prompt() y alert().", link: ""},
{name: "Mascotas en Foco", title: "Galería Dinámica: Mascotas en Foco", image: "", description:"Descubra nuestra cautivadora galería de imágenes dedicada a perros y gatos, un proyecto que fusiona diseño responsivo con el encanto de nuestras mascotas favoritas.", link: ""},
{name: "Cuadros Dinamicos", title: "", image: "Mosaico Responsivo: Cuadrados Dinámicos", description:"Explore nuestro innovador diseño de mosaico digital, una demostración visual de diseño web moderno y adaptativo. Este proyecto exhibe una composición armoniosa de cuadrados de diversos tamaños y colores, creada exclusivamente con HTML y CSS.", link: ""},
]
arrayProject.forEach(proyect => {
    const tarjetaHTML = crearTarjetaProyecto(proyect);
    projectSeccion.innerHTML += tarjetaHTML;
  });


// caurosel

// const carousel = document.querySelector('.carousel');
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let slideIndex = 0;

// function showSlide(n) {
//     slides[slideIndex].style.display = 'none';
//     slideIndex = (n + slides.length) % slides.length;
//     slides[slideIndex].style.display = 'block';
// }

// prevButton.addEventListener('click', () => {
//     showSlide(slideIndex - 1);
// });

// nextButton.addEventListener('click', () => {
//     showSlide(slideIndex + 1);
// });

