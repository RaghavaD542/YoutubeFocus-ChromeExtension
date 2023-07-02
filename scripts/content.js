const homepage = document.querySelectorAll('ytd-rich-grid-renderer');

function removeContent() {
  const homepage = document.querySelectorAll('ytd-rich-grid-renderer');

  if (homepage) {
    Array.prototype.forEach.call(homepage, (child) => {
      child.style.display = 'none';
    });
  }
}

var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      removeContent();
    }
  });
});

removeContent();
window.scrollTo(0, 0);
const yt = document.querySelector('#contents');
observer.observe(yt, {
  childList: true,
});
