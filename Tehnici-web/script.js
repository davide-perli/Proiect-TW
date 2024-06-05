//  modificarea stilului unui element sau al unui grup de elemente
document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.imagini-container img');

  // folosirea și modificarea evenimentelor generate de mouse și tastatură
  images.forEach(function (img) {
    img.addEventListener('mouseenter', function () {
      toggleZoom(this, true);
    });
    img.addEventListener('mouseleave', function () {
      toggleZoom(this, false);
    });
  });
});

function toggleZoom(img, zoomIn) 
{
  console.log('Toggle Zoom function called');
  if (zoomIn) 
  {
    // modificarea stilului unui element sau al unui grup de elemente
    img.style.transform = 'scale(1.7)';
    // folosirea proprietăților classList, target, currentTarget + creare si stergere de elemente
    img.classList.add('zoomed');
    console.log('Image zoomed in');
  } else {
    img.style.transform = 'scale(1)';
    // folosirea proprietăților classList, target, currentTarget + creare si stergere de elemente
    img.classList.remove('zoomed');
    console.log('Image zoomed out');
  }
}
