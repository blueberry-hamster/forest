// import { drawLayer, draw, tree } from './tree_builder';
import Tree from "./tree";
import * as trees from "./presets";
import { camelToKebab } from "./tree_helpers";

let currTree = trees.tree1;
new Tree(currTree.levels, currTree.startPt.x).drawTree(currTree);

