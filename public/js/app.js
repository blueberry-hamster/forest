
document.addEventListener('DOMContentLoaded', (e) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const forestContainer = document.getElementById('forest-container');
  
  async function addTreesToForest() {
    const images = await storageRef.list({ maxResults: 10 });
    
    images.items.forEach( async imgObj => {
      const pathRef = storage.ref(imgObj.fullPath);
      const url = await pathRef.getDownloadURL();
      const img = document.createElement('img');
      img.src = url;
      forestContainer.appendChild(img);

      console.log(url);
    });
  } 

  addTreesToForest();
});