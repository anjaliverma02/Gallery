let images = [
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Image/image3.jpg"
];

let currentImage = 0;

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("galleryImage").src = images[currentImage];
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("galleryImage").src = images[currentImage];
}
