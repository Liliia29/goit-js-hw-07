import { galleryItems } from './gallery-items.js';
// Change code below this line


// import '../basiclightbox/dist/basicLightbox.min.css';
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', e => {
  e.preventDefault();
  
  if (e.target.classList.contains('gallery__image')) {
    const imageSrc = e.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>
    `);
        instance.show();
    
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        instance.close();
      }
    });
  }
});




// const containerImages = document.querySelector('.gallery');
// const callFunctionGallery = createImagesCards(galleryItems);

// containerImages.insertAdjacentHTML(
//     'beforeend',
//     createImagesCards(galleryItems)
// );

// function createImagesCards(arrayImages){
//     const markup = arrayImages
//     .map(({preview, original, description}) => {
//         return `<li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//       </li>`;
//     })
//     return
   
    
// }
// console.log(galleryItems);