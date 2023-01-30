
function displayContent() {
  setTimeout(5000);
}

window.onload = displayContent();

setTimeout(function() {
    var content = document.getElementById('content');
  content.style.visibility = 'visible';
  content.style.opacity = 1;
}, 4000);