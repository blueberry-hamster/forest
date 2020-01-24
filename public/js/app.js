
document.addEventListener('DOMContentLoaded', (e) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  
  async function abc() {
    const images = await storageRef.list({ maxResults: 10 });
    
  } 

  abc();
});