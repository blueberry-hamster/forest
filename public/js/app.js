
document.addEventListener('DOMContentLoaded', async (e) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const forestTreesContainer = document.querySelector('.trees');
  
  async function addTreesToForest() {
    const images = await storageRef.list({ maxResults: 5 });

    for (const imgObj of images.items) {
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
  // const cloneImg1 = document.images[0].cloneNode(false);
  // const cloneImg2c1 = document.images[1].cloneNode(false);
  // const cloneImg2c2 = document.images[1].cloneNode(false);
  // const cloneImg3c1 = document.images[2].cloneNode(false);
  // const cloneImg3c2 = document.images[2].cloneNode(false);
  // const cloneImg4c1 = document.images[3].cloneNode(false);
  // const cloneImg4c2 = document.images[3].cloneNode(false);
  // const cloneImg5c1 = document.images[4].cloneNode(false);
  // const cloneImg5c2 = document.images[4].cloneNode(false);
  // const cloneImg6c1 = document.images[5].cloneNode(false);
  // const cloneImg6c2 = document.images[5].cloneNode(false);
  // const cloneImg7c1 = document.images[6].cloneNode(false);
  // const cloneImg7c2 = document.images[6].cloneNode(false);
  // const cloneImg8c1 = document.images[7].cloneNode(false);
  // const cloneImg8c2 = document.images[7].cloneNode(false);
  // const cloneImg9c1 = document.images[8].cloneNode(false);
  // const cloneImg9c2 = document.images[8].cloneNode(false);
  // const cloneImg10 = document.images[9].cloneNode(false);

  const cloneImg1 = document.images[0].cloneNode(false);
  const cloneImg2c1 = document.images[1].cloneNode(false);
  const cloneImg2c2 = document.images[1].cloneNode(false);
  const cloneImg3c1 = document.images[2].cloneNode(false);
  const cloneImg3c2 = document.images[2].cloneNode(false);
  const cloneImg4c1 = document.images[3].cloneNode(false);
  const cloneImg4c2 = document.images[3].cloneNode(false);
  const cloneImg5 = document.images[4].cloneNode(false);

  forestTreesContainer.insertBefore(cloneImg5, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg4c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg3c1, document.images[0]);
  forestTreesContainer.insertBefore(cloneImg2c1, document.images[0]);
  forestTreesContainer.appendChild(cloneImg1);
  forestTreesContainer.appendChild(cloneImg2c2);
  forestTreesContainer.appendChild(cloneImg3c2);
  forestTreesContainer.appendChild(cloneImg4c2);

  // Step 3: Adding an infinite scroll effect
  const sliderStartForward = document.images[4].getBoundingClientRect().left;
  const sliderEndForward = document.images[8].getBoundingClientRect().right - 10;
  const sliderStartBackward = document.images[4].getBoundingClientRect().right;

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

