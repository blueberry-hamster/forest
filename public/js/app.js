
document.addEventListener('DOMContentLoaded', async (e) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const forestTreesContainer = document.querySelector('.trees');
  
  function addTreesToForest() {
    const images = storageRef.list({ maxResults: 10 });
    
    images.items.forEach( async imgObj => {
      const pathRef = storage.ref(imgObj.fullPath);
      const url = pathRef.getDownloadURL();
      const img = document.createElement('img');
      img.src = url;
      forestTreesContainer.appendChild(img);
    });
  } 

  
  // Step 1: Creating a simple slider
  const allTrees = addTreesToForest();
  // debugger
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

  container.insertBefore(cloneImg5, document.images[0]);
  container.insertBefore(cloneImg4c1, document.images[0]);
  container.insertBefore(cloneImg3c1, document.images[0]);
  container.insertBefore(cloneImg2c1, document.images[0]);
  container.appendChild(cloneImg1);
  container.appendChild(cloneImg2c2);
  container.appendChild(cloneImg3c2);
  container.appendChild(cloneImg4c2);

  // Step 3: Adding an infinite scroll effect
  const sliderStartForward = document.images[4].getBoundingClientRect().left;
  const sliderEndForward = document.images[8].getBoundingClientRect().right - 10;
  const sliderStartBackward = document.images[4].getBoundingClientRect().right;

  // We're repositionning our slider to our first true image 
  // as currently the first image we're seing is a clone
  container.scrollLeft = sliderStartForward;

  container.addEventListener('scroll', scrolling);

  function scrolling() {
    // We're sliding backwards and reached the end
    if (container.scrollLeft < 1) {
      container.scrollLeft = sliderStartBackward;
    }

    // We're sliding forwards and reached the end
    if (container.scrollLeft > sliderEndForward) {
      container.scrollLeft = sliderStartForward;
    }
  }


});

