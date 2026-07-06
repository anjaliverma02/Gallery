let images = [
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Images/image3.jpg" // fixed
];

let currentImage = 0;

// set first image when page loads
document.getElementById("galleryImage").src = images[currentImage];

function nextImage() {
    currentImage = (currentImage + 1) % images.length; // cleaner way to loop
    document.getElementById("galleryImage").src = images[currentImage];
}

function previousImage() {
    currentImage = (currentImage - 1 + images.length) % images.length; // cleaner way to loop back
    document.getElementById("galleryImage").src = images[currentImage];
}
