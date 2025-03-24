document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "images/gallery1.jpg",
        "images/gallery2.jpg",
        "images/gallery3.jpg",
        "images/gallery4.jpg",
        "images/gallery5.jpg"
    ];
    let currentIndex = 0;
    const galleryImage = document.getElementById("gallery-image");

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        galleryImage.src = images[currentIndex];
    }
    window.changeSlide = changeSlide;

    setInterval(() => changeSlide(1), 6000); // auto-slide every 3 sec
});