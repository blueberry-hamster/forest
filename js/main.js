// import { drawLayer, draw, tree } from './tree_builder';
import Tree from "./tree";
import * as trees from "./presets";
import { draw } from "./tree";

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

function saveData(data, fileName) {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";

  var json = JSON.stringify(data),
    blob = new Blob([data], { type: "text/plain;charset=utf-8" }),
    url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);

}

document.querySelector('.save-btn').addEventListener('click', e => {
  e.preventDefault();
  saveData(draw.svg(), "tree.svg");
});

