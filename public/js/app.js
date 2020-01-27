
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

