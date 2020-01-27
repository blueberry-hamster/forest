// import { drawLayer, draw, tree } from './tree_builder';
import Tree from "./tree";
import * as trees from "./presets";
import { draw } from "./tree";
import { svg2png } from 'svg-png-converter';
import "regenerator-runtime/runtime";

const showLoadingModal = bool => {
  const loadingModal = document.querySelector('#loading-screen');
  
  if (bool) {
    loadingModal.classList.remove('hidden');
    console.log('show loading');
  } else {
    loadingModal.classList.add('hidden');
    console.log('remove loading');
  }
};

const drawTree = currTree => {
  new Tree(currTree.levels, currTree.startPt.x).drawTree(currTree);
};


// DRAW THE TREE VIA BUTTON CLICKS
let currTree = trees.tree1;
drawTree(currTree);
// remove loading after tree loads
showLoadingModal(false);

Object.values(trees).forEach((tree, i) => {
  let button = document.querySelector(`.tree-${i + 1}`);

  button.addEventListener('click', e => {
    e.preventDefault();
    // put in loading
    showLoadingModal(true);
    draw.clear();
    
    let currTree = trees[`tree${i + 1}`];    
    drawTree(currTree);
    // remove loading
    showLoadingModal(false);
    
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
async function saveToBucket(data) {
  const date = new Date();
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const treeSvgRef = storageRef.child(`tree_${ date.getTime() }.png`);

  const pngFile = await svg2png({
    input: data,
    encoding: 'buffer',
    format: 'png',
    width: 800,
    height: 800,
    multiplier: 1,
    quality: 1
  });

  await treeSvgRef.put(pngFile);
  console.log('Successfully saved to bucket');
}

document.querySelector('.save-btn').addEventListener('click', e => {
  e.preventDefault();
  const file = draw.svg();

  saveToComputer(file, "tree.svg");
  saveToBucket(file);
});
