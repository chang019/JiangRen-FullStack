window.addEventListener('load', function() {
    let thumbnail = document.querySelector(".gallery-item-inner");
    let overlay = document.querySelector(".overlay");

    thumbnail.addEventListener("mouseenter", function() {
        overlay.style.display = "table";
    })
    thumbnail.addEventListener("mouseleave", function() {
        overlay.style.display = "none";
    })
    overlay.addEventListener("click", function() {
        alert("overlay clicked");
    })
} );