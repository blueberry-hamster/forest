
document.addEventListener('DOMContentLoaded', (e) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  
  async function abc() {
    const images = await storageRef.listAll();
    debugger
  } 

  abc();

  // storageRef.listAll()
  // .then( res => {
  //   console.log(res);
  // });
});