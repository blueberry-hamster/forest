// import { drawLayer, draw, tree } from './tree_builder';
import Tree from "./tree";
import * as trees from "./presets";
import { draw } from "./tree";

// DRAW THE TREE VIA BUTTON CLICKS
let currTree = trees.tree4;
new Tree(currTree.levels, currTree.startPt.x).drawTree(currTree);
Object.values(trees).forEach((tree, i) => {
  let button = document.querySelector(`.tree-${i + 1}`);
  button.addEventListener('click', e => {
    e.preventDefault();
    draw.clear();

    let currTree = trees[`tree${i + 1}`];    
    new Tree(currTree.levels, currTree.startPt.x).drawTree(currTree);
  });
});

// SAVE TREE TO COMPUTER FUNCTIONALITY
function saveToComputer(data, fileName) {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";

  const json = JSON.stringify(data),
    blob = new Blob([data], { type: "text/plain;charset=utf-8" }),
    url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}

// SAVE TREE TO FIREBASE BUCKET
function saveToBucket(data) {
  var storageRef = firebase.storage().ref();

  // // Create a reference to 'mountains.jpg'
  // var treesRef = storageRef.child('trees.svg');
  
  storageRef.put(data)
    .then( snapshot => {
      console.log('Uploaded a file!');
      console.log(snapshot);
    });
}

document.querySelector('.save-btn').addEventListener('click', e => {
  e.preventDefault();
  const file = draw.svg();

  // saveToComputer(file, "tree.svg");
  saveToBucket(file);
});