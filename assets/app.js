// //carrusel

// document.addEventListener('DOMContentLoaded', function() {
//     const slider = document.getElementById('news-slider');
    
//     // Configuración del carrusel
//     const config = {
//       items: 3,
//       itemsDesktop: [1199, 3],
//       itemsDesktopSmall: [980, 2],
//       itemsMobile: [600, 1],
//       navigation: true,
//       navigationText: ["", ""],
//       pagination: true,
//       autoPlay: true
//     };
  
//     // Implementación básica de un carrusel
//     let currentIndex = 0;
//     const items = slider.children;
//     const totalItems = items.length;
  
//     function showItems() {
//       for (let i = 0; i < totalItems; i++) {
//         items[i].style.display = 'none';
//       }
      
//       let itemsToShow = config.items;
//       if (window.innerWidth <= 600) itemsToShow = config.itemsMobile[1];
//       else if (window.innerWidth <= 980) itemsToShow = config.itemsDesktopSmall[1];
//       else if (window.innerWidth <= 1199) itemsToShow = config.itemsDesktop[1];
  
//       for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
//         if (items[i % totalItems]) items[i % totalItems].style.display = 'block';
//       }
//     }
  
//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % totalItems;
//       showItems();
//     }
  
//     function prevSlide() {
//       currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//       showItems();
//     }
  
//     // Crear botones de navegación si están habilitados
//     if (config.navigation) {
//       const prevButton = document.createElement('button');
//       prevButton.textContent = config.navigationText[0] || 'Prev';
//       prevButton.addEventListener('click', prevSlide);
      
//       const nextButton = document.createElement('button');
//       nextButton.textContent = config.navigationText[1] || 'Next';
//       nextButton.addEventListener('click', nextSlide);
  
//       slider.parentNode.insertBefore(prevButton, slider);
//       slider.parentNode.insertBefore(nextButton, slider.nextSibling);
//     }
  
//     // Crear paginación si está habilitada
//     if (config.pagination) {
//       const paginationContainer = document.createElement('div');
//       for (let i = 0; i < totalItems; i++) {
//         const dot = document.createElement('span');
//         dot.addEventListener('click', () => {
//           currentIndex = i;
//           showItems();
//         });
//         paginationContainer.appendChild(dot);
//       }
//       slider.parentNode.appendChild(paginationContainer);
//     }
  
//     // Iniciar autoplay si está habilitado
//     if (config.autoPlay) {
//       setInterval(nextSlide, 3000); // Cambia cada 3 segundos
//     }
  
//     // Mostrar los elementos iniciales
//     showItems();
  
//     // Actualizar visualización en cambio de tamaño de ventana
//     window.addEventListener('resize', showItems);
//   });



// footer html

// <footer class="bg-body-tertiary text-center">
// <!-- Grid container -->
// <div class="container p-4 pb-0">
//   <!-- Section: Social media -->
//   <section class="mb-4">
//     <!-- Facebook -->
//     <a
//     data-mdb-ripple-init
//       class="btn text-white btn-floating m-1"
//       style="background-color: #3b5998;"
//       href="#!"
//       role="button"
//       ><i class="fab fa-facebook-f"></i
//     ></a>

//     <!-- Twitter -->
//     <a
//       data-mdb-ripple-init
//       class="btn text-white btn-floating m-1"
//       style="background-color: #55acee;"
//       href="#!"
//       role="button"
//       ><i class="fab fa-twitter"></i
//     ></a>

//     <!-- Google -->
//     <a
//       data-mdb-ripple-init
//       class="btn text-white btn-floating m-1"
//       style="background-color: #dd4b39;"
//       href="#!"
//       role="button"
//       ><i class="fab fa-google"></i
//     ></a>

//     <!-- Instagram -->
//     <a
//       data-mdb-ripple-init
//       class="btn text-white btn-floating m-1"
//       style="background-color: #ac2bac;"
//       href="#!"
//       role="button"
//       ><i class="fab fa-instagram"></i
//     ></a>

//     <!-- Linkedin -->
//     <a
//       data-mdb-ripple-init
//       class="btn text-white btn-floating m-1"
//       style="background-color: #0082ca;"
//       href="#!"
//       role="button"
//       ><i class="fab fa-linkedin-in"></i
//     ></a>
//     <!-- Github -->
//     <a
//       data-mdb-ripple-init
//       class="btn text-white btn-floating m-1"
//       style="background-color: #333333;"
//       href="#!"
//       role="button"
//       ><i class="fab fa-github"></i
//     ></a>
//   </section>
//   <!-- Section: Social media -->
// </div>
// <!-- Grid container -->

// <!-- Copyright -->
// <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
//   © 2020 Copyright:
//   <a class="text-body" href="https://github.com/Pekazor">https://github.com</a>
//   <p>&copy; Esteban Basualdo - Todos los derechos reservados.</p>
// </div>
// <!-- Copyright -->
// </footer>