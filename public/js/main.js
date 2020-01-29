// import { drawLayer, draw, tree } from './tree_builder';
import Tree from "./tree";
import * as trees from "./presets";
import { randomInt } from './helpers';
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

const popMessage = message => {
  const messageContainer = document.querySelector('.message');
  messageContainer.innerHTML = message;
  window.setTimeout(() => messageContainer.innerHTML = "", 3000);
};

const drawTree = currTree => {
  new Tree(currTree.levels, currTree.startPt.x).drawTree(currTree);
};


// DRAW THE TREE VIA BUTTON CLICKS
const startingNum = randomInt(1, 3);
const currTree = trees[`tree${startingNum}`];
// select the corresponding button
document.querySelector(`.tree-${startingNum}`).classList.add('selected');
// draw tree
drawTree(currTree);
// remove loading after tree loads
showLoadingModal(false);

Object.values(trees).forEach((tree, i) => {
  let button = document.querySelector(`.tree-${i + 1}`);
  
  button.addEventListener('click', async e => {
    e.preventDefault();
  
    // put in loading
   await showLoadingModal(true);
    draw.clear();
    // change selected
    document.querySelector('.selected').classList.remove('selected');
    button.classList.add('selected');
    
    await window.setTimeout(() => console.log('setting timeout'), 0);
    
    let currTree = trees[`tree${i + 1}`];    
    await drawTree(currTree);
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
    width: 1200,
    height: 1200,
    multiplier: 1,
    quality: 1
  });

  await treeSvgRef.put(pngFile);
  console.log('Successfully saved to bucket');
}

document.querySelector('.save-local-btn').addEventListener('click', e => {
  e.preventDefault();
  const file = draw.svg();

  saveToComputer(file, "tree.svg");
});

document.querySelector('.save-cloud-btn').addEventListener('click', async e => {
  e.preventDefault();
  showLoadingModal(true);
  
  const file = draw.svg();

  await saveToBucket(file);
  showLoadingModal(false);
  popMessage('This tree has been saved to the forest.');
});


// handle changing 'pages'
const title = document.querySelector('.title');
const h1 = document.querySelector('h1');
const treeGeneratorContainer = document.querySelector('#tree-generator-container');
const forestContainer = document.querySelector('#forest-container');
const buttonsSection = document.querySelector('.buttons');

title.addEventListener('click', e => {
  e.preventDefault();
  
  if (h1.innerText === 'Forest') {
    h1.innerText = 'Tree';
    treeGeneratorContainer.style.display = 'none';
    forestContainer.style.display = 'flex';
    buttonsSection.style.display = 'none';
  } else {
    h1.innerText = 'Forest';
    treeGeneratorContainer.style.display = 'flex';
    forestContainer.style.display = 'none';
    buttonsSection.style.display = 'block';
  }
  
});