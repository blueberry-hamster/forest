const randStep = (min, max, step) => {
  return min + (step * Math.floor(Math.random() * (max - min) / step));
};

const randList = (min, max, step, length) => {
  const list = [];

  while (list.length < length) {
    const randInt = randStep(min, max, step);
    if (!list.includes(randInt)) list.push(randInt);
  }

  return list;
};

const positionTreesRandomly = trees => {
  const positions = randList(0, 700, 15, trees.length);

  for (let i = 0; i < trees.length; i++) {
    trees[i].style.left = `${positions[i]}vw`;
  }
};

document.addEventListener('DOMContentLoaded', async (e) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const forestTreesContainer = document.querySelector('.trees');
  
  async function addTreesToForest() {
    // const images = await storageRef.list({ maxResults: 5 });
    const images = await storageRef.list();
    const last10Imgs = images.items.reverse().slice(0, 10);

    for (const imgObj of last10Imgs) {
      const pathRef = storage.ref(imgObj.fullPath);
      const url = await pathRef.getDownloadURL();
      const img = document.createElement('img');
      img.src = url;
      await forestTreesContainer.appendChild(img);
    }
  } 
  
  // Step 1: Creating a simple slider
  const allTrees = await addTreesToForest();


  // Step 2: Preparing for infinite scroll
  const cloneImg1 = document.images[0].cloneNode(false);
  const cloneImg2c1 = document.images[1].cloneNode(false);
  const cloneImg2c2 = document.images[1].cloneNode(false);
  const cloneImg3c1 = document.images[2].cloneNode(false);
  const cloneImg3c2 = document.images[2].cloneNode(false);
  const cloneImg4c1 = document.images[3].cloneNode(false);
  const cloneImg4c2 = document.images[3].cloneNode(false);
  const cloneImg5c1 = document.images[4].cloneNode(false);
  const cloneImg5c2 = document.images[4].cloneNode(false);
  const cloneImg6c1 = document.images[5].cloneNode(false);
  const cloneImg6c2 = document.images[5].cloneNode(false);
  const cloneImg7c1 = document.images[6].cloneNode(false);
  const cloneImg7c2 = document.images[6].cloneNode(false);
  const cloneImg8c1 = document.images[7].cloneNode(false);
  const cloneImg8c2 = document.images[7].cloneNode(false);
  const cloneImg9c1 = document.images[8].cloneNode(false);
  const cloneImg9c2 = document.images[8].cloneNode(false);
  const cloneImg10 = document.images[9].cloneNode(false);

  forestTreesContainer.insertBefore(cloneImg10, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg9c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg8c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg7c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg6c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg5c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg4c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg3c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg2c1, document.images[0]);
  forestTreesContainer.appendChild(cloneImg1);
  forestTreesContainer.appendChild(cloneImg2c2);
  forestTreesContainer.appendChild(cloneImg3c2);
  forestTreesContainer.appendChild(cloneImg4c2);
  forestTreesContainer.appendChild(cloneImg5c2);
  forestTreesContainer.appendChild(cloneImg6c2);
  forestTreesContainer.appendChild(cloneImg7c2);
  forestTreesContainer.appendChild(cloneImg8c2);
  forestTreesContainer.appendChild(cloneImg9c2);

  

  positionTreesRandomly(forestTreesContainer.children);

  // Step 3: Adding an infinite scroll effect
  const sliderStartForward = document.images[9].getBoundingClientRect().left;
  const sliderEndForward = document.images[19].getBoundingClientRect().right;
  const sliderStartBackward = document.images[9].getBoundingClientRect().right;

  // We're repositionning our slider to our first true image 
  // as currently the first image we're seing is a clone
  forestTreesContainer.scrollLeft = sliderStartForward;

  forestTreesContainer.addEventListener('scroll', scrolling);

  function scrolling() {
    // We're sliding backwards and reached the end
    if (forestTreesContainer.scrollLeft < 1) {
      forestTreesContainer.scrollLeft = sliderStartBackward;
    }

    // We're sliding forwards and reached the end
    if (forestTreesContainer.scrollLeft > sliderEndForward) {
      forestTreesContainer.scrollLeft = sliderStartForward;
    }
  }


});

