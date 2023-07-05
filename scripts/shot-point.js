const block = document.querySelector('.block');
const bigBlock = document.querySelector('.fullscreen-block');
const image = document.querySelector('.image');

// block.onclick = function (e) {
//   this.requestFullscreen();

//   bigBlock.onclick = function(e) {
//     var point = document.createElement('div');
//     point.className = 'point';
//     point.style.left = e.clientX - 6 + 'px';
//     point.style.top = e.clientY - 4 + 'px';
//     bigBlock.appendChild(point);
//   }  
// }

document.oncontextmenu = function (e) { return false };

block.onclick = function (e) { this.requestFullscreen(); 

  function addRedPoint(e) {
    var point = document.createElement('div');
    point.className = 'point-red';
    point.style.left = e.clientX - 6 + 'px';
    point.style.top = e.clientY - 4 + 'px';
    bigBlock.appendChild(point);
  }
  
  function addGreenPoint(e) {
    var point = document.createElement('div');
    point.className = 'point-green';
    point.style.left = e.clientX - 6 + 'px';
    point.style.top = e.clientY - 4 + 'px';
    bigBlock.appendChild(point);
  }

  bigBlock.addEventListener('click', addRedPoint);
  bigBlock.addEventListener('contextmenu', addGreenPoint);

}




