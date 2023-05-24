const block = document.querySelector('.camera-status');
var point = document.createElement('div');

block.onclick = function(e) {
  var point = document.createElement('div');
  point.className = 'point';
  point.style.left = e.pageX + 'px';
  point.style.top = e.pageY + 'px';
  block.appendChild(point);
}
