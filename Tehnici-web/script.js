document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.imagini-container img');

  images.forEach(function (img) {
    img.addEventListener('mouseenter', function () {
      toggleZoom(this, true);
    });
    img.addEventListener('mouseleave', function () {
      toggleZoom(this, false);
    });
  });
});

function toggleZoom(img, zoomIn) {
  console.log('Toggle Zoom function called');
  if (zoomIn) {
    img.style.transform = 'scale(1.7)';
    img.classList.add('zoomed');
    console.log('Image zoomed in');
  } else {
    img.style.transform = 'scale(1)';
    img.classList.remove('zoomed');
    console.log('Image zoomed out');
  }
}