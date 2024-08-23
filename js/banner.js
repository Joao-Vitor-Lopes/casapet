let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 10000);

function nextImage() {
    count++;
    if (count > 2) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

document.getElementById("prev-btn").addEventListener("click", function() {
    count--;
    if (count < 1) {
        count = 2;
    }
    document.getElementById("radio" + count).checked = true;
});

document.getElementById("next-btn").addEventListener("click", function() {
    nextImage();
});
