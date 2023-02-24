var cvs = document.createElement('canvas');
var ctx = cvs.getContext('2d');

function openFile() {
    var img = document.getElementById('out');
    var oimg = document.getElementById('in');
    var f = document.getElementById("uploadimage").files[0];
    var url = window.URL || window.webkitURL;
    var src = url.createObjectURL(f);

    img.src = src;
    oimg.src = src;
    img.onload = function() {
        cvs.height = img.height;
        cvs.width = img.width;
        ctx.drawImage(img, 0, 0);
    }
}

function openURL() {
    var img = document.getElementById('out');
    var oimg = document.getElementById('in');
    var src = document.getElementById('lurl').value;

    img.src = src;
    oimg.src = src;
    img.onload = function() {
        cvs.height = img.height;
        cvs.width = img.width;
        ctx.drawImage(img, 0, 0);
    }
}

function artifact() {
    var img = document.getElementById('out');
    var factor = document.getElementById('factor').value * 1.0;

    img.src = cvs.toDataURL("image/jpeg",factor + Math.random()*0.1);
    ctx.drawImage(img,0,0);
}

function clearImg() {
    var img = document.getElementById('out');
    var oimg = document.getElementById('in');
    img.src = '';
    oimg.src = '';
}

document.getElementById("uploadimage").addEventListener("change", openFile, false);