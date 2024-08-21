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