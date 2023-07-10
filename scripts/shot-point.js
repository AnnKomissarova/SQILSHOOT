var myImage = document.getElementById("myImage");
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var removeButton = document.getElementById("removeButton");
var exitButton = document.getElementById("exitButton");
var points = [];
var scale = 1;

myImage.onclick = function () {
  modal.style.display = "block";
  modalImage.src = this.src;
  modalImage.onload = function () {
    canvas.width = modalImage.width;
    canvas.height = modalImage.height;
    canvas.style.top = modalImage.offsetTop + 'px';
    canvas.style.left = modalImage.offsetLeft + 'px';
  };

  points = [];

  drawPoints();
}

canvas.onclick = function (e) {
  e.stopPropagation();
}

canvas.oncontextmenu = function (e) {
  e.preventDefault();
}

removeButton.onclick = function () {
  if (points.length > 0) {
    points.pop();
    drawPoints();
  }
}

canvas.onmousedown = function (e) {
  e.preventDefault();

  var p_color = '';

  if (e.button === 0) {
    p_color = "green";
  } else if (e.button === 2) {
    p_color = "red";
  }

  context.fillStyle = p_color;

  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  points.push({ x: x, y: y, color: p_color });
  // context.beginPath();
  // context.arc(x, y, 4.5, 0, 2 * Math.PI);
  // context.fill();

  drawPoints();
}

window.onkeydown = function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
}

function drawPoints() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    context.fillStyle = point.color;
    context.beginPath();
    context.arc(point.x, point.y, 4.5, 0, 2 * Math.PI);
    context.fill();
  }
}

function closeModal() {
  modal.style.display = "none";
};

exitButton.addEventListener('click', closeModal);

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


