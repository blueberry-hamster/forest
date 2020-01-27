
document.addEventListener('DOMContentLoaded', (e) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const forestTreesContainer = document.querySelector('.trees');
  
  async function addTreesToForest() {
    const images = await storageRef.list({ maxResults: 10 });
    
    images.items.forEach( async imgObj => {
      const pathRef = storage.ref(imgObj.fullPath);
      const url = await pathRef.getDownloadURL();
      const img = document.createElement('img');
      img.src = url;
      forestTreesContainer.appendChild(img);
    });
  } 

  addTreesToForest();
});

$('.trees').endless({

  direction: 'horizontal', //Direction : up (infinite top scrolling), down (infinite bottom scrolling), vertical (infinite top and bottom scrolling)

  scrollbar: 'disable' //Enable or disable the scrollbar

});

$('#forest-container').mousewheel(function (e) {
  $(this).scrollLeft($(this).scrollLeft() - e.deltaY * 20);
  e.preventDefault();
});
