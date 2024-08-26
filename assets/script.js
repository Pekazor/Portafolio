
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
{name: "Demo Cajero Automatico", title: "Simulador de Cajero Automático en JavaScript", image: "assets/img/mosaico.png", description:"Explore nuestra implementación de un Cajero Automático virtual, desarrollado íntegramente en JavaScript. Este proyecto demuestra la capacidad de crear una aplicación interactiva y funcional utilizando únicamente las funciones prompt() y alert().", link: ""},
{name: "Mascotas en Foco", title: "Galería Dinámica: Mascotas en Foco", image: "assets/img/MosaicoAnimal.png", description:"Descubra nuestra cautivadora galería de imágenes dedicada a perros y gatos, un proyecto que fusiona diseño responsivo con el encanto de nuestras mascotas favoritas.", link: ""},
{name: "Cuadros Dinamicos", title: "Mosaico Responsivo: Cuadrados Dinámicos", image: "assets/img/mosaico.png", description:"Explore nuestro innovador diseño de mosaico digital, una demostración visual de diseño web moderno y adaptativo. Este proyecto exhibe una composición armoniosa de cuadrados de diversos tamaños y colores, creada exclusivamente con HTML y CSS.", link: ""},
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

