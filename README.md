# Forest
### [Live Demo](https://forest-d0bd9.firebaseapp.com/ "Live link of Forest")



## Summary:
An elegant, serverless pet-project that demonstrates the mathematical nature of plants, and art. 

## Key Features:

### Custom Recursive Tree Algorithm
![](demo/forest_lineup.png)
The base of the tree function is recursive, with helper mathematical functions. I utilized trigonometry, and bezier curves to calculate points. 26 adjustable parameters were used to define each tree model. The tree functions were organized into classes, and helper files. 

### Utilization of SVG.js 
![](demo/tree.svg)
In order to easily generate, manipulate, and attach SVGs to the DOM I chose to use the SVG.js library. 

### Image saving, and file conversion
![](demo/forest_save_tree.gif)
Scalable vector graphics was chosen as file format, because it is highly reusable as an image asset. This means that when users save their trees to their devices, they can easily use them for a menagerie of applications. Due to the complexity of the trees, the SVG files are very large in file size, so I used an NPM package to convert the files to a PNG format, to both reduce the file size, and retain the transparency information. 

### Google Firebase hosting, and image storage
![](demo/forest_scroll.gif)
The minimalist nature of the project meant that I didn’t need a server since I only needed to save images. I chose to use Firebase, since it offers hosting, and cloud bucket storage. After the tree is converted into a PNG image, it is uploaded to the bucket. The newest images are then fetched, and attached to the DOM to populate the forest.

### Simple, elegant UI/UX
![](demo/forest_main.png)
The concept was for all the focus to be on the generated assets, so a minimalist, non-distracting background was chosen. On a previous iteration of the project there were slider bars that allowed users to manipulate tree parameters, but due to the non-linear scaling of many of the parameters, the app was easy to break. Therefore, I created preset trees, chose the magic number 3, and updated the UI. I believe this resulted in a more elegant overall look, while still allowing users to feel that their tree is unique. 
