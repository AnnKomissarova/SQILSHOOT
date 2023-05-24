const blocks = document.getElementsByClassName('camera-status');
var point = document.createElement('div');

for (var i = 0; i < blocks.length; i++) {
    blocks[i].onclick = function (e) {
        point.className = 'point';
        point.style.left = e.pageX + 'px';
        point.style.top = e.pageY + 'px';
        this.append(point)
    }

}

