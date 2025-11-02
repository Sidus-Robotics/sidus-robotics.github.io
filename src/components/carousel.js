window.addEventListener("load", () => {
  const track = document.getElementById("galleryTrack");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  // Get original images before cloning
  const originalImages = [...track.children];
  const totalImages = originalImages.length;
  const imagesVisible = 2; // Showing 2 images at once

  // Clone enough images to fill gaps on both sides
  // For 2 visible images, we need 2 clones on each side
  const clones = [];
  
  // Clone last 2 images for the beginning
  for (let i = totalImages - imagesVisible; i < totalImages; i++) {
    const clone = originalImages[i].cloneNode(true);
    clones.push(clone);
    track.insertBefore(clone, track.firstChild);
  }
  
  // Clone first 2 images for the end
  for (let i = 0; i < imagesVisible; i++) {
    const clone = originalImages[i].cloneNode(true);
    track.appendChild(clone);
  }

  // Start at index 2 (first real images, after the 2 clones)
  let currentIndex = imagesVisible;
  let isTransitioning = false;

  function updateGallery(smooth = true) {
    // Calculate based on track width, not container width
    const trackWidth = track.offsetWidth;
    const imageWidth = trackWidth / imagesVisible;
    
    if (smooth) {
      track.style.transition = 'transform 0.4s ease-in-out';
    } else {
      track.style.transition = 'none';
    }
    
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  function handleTransitionEnd() {
    isTransitioning = false;
    
    // If we've gone past the real images (showing clones at the end)
    // Jump when we start showing any clones, not when both images are clones
    if (currentIndex > totalImages) {
      currentIndex = imagesVisible; // Jump back to start of real images
      updateGallery(false);
    }
    // If we've gone before the real images (showing clones at the beginning)
    else if (currentIndex < imagesVisible) {
      currentIndex = totalImages; // Jump to end of real images
      updateGallery(false);
    }
  }

  rightArrow.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    updateGallery();
  });

  leftArrow.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    updateGallery();
  });

  // Listen for transition end to handle seamless looping
  track.addEventListener('transitionend', handleTransitionEnd);

  // Handle window resize
  window.addEventListener("resize", () => updateGallery(false));
  
  // Initialize
  updateGallery(false);
});