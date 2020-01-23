document.addEventListener('DOMContentLoaded', (e) => {
  const app = firebase.app();
  const db = firebase.firestore();
  const trees = db.collection('tree');
  // debugger

  // trees.get()
  //   .then(trees => {
  //     document.write( data );
  // });

  // function uploadTree(e) {
  //   const db = firebase.firestore();

  // }
});