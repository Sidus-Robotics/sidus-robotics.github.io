const blurDivs = document.querySelectorAll(".blur-load")

blurDivs.forEach(div => {
    const img = div.querySelector("img")

    function loaded() {
        div.classList.add("loaded")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
})

// TODO: Check this.
// javascriptdocument.addEventListener("DOMContentLoaded", () => {
//   const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

//   // Configuration settings for the observer
//   const observerOptions = {
//     root: null, // Defaults to the browser viewport
//     rootMargin: "0px 0px 200px 0px", // Pre-loads the image 200px before it scrolls into view
//     threshold: 0.01 // Triggers as soon as 1% of the element is visible
//   };

//   const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const element = entry.target;
//         const bgUrl = element.getAttribute("data-bg");

//         // Inject the background image directly into the inline style
//         element.style.backgroundImage = `url('${bgUrl}')`;
//         element.classList.add("visible");

//         // Stop watching this element since it has successfully loaded
//         observer.unobserve(element);
//       }
//     });
//   }, observerOptions);

//   // Initialize tracking for all target elements
//   lazyBackgrounds.forEach(bg => imageObserver.observe(bg));
// });
