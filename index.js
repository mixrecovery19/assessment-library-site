// JavaScript for the inex.html page embedded video
// assists in the lazy loading of the video
// to ensure that the page loads faster
document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('youtube-iframe');
    if ('loading' in HTMLIFrameElement.prototype) {
        iframe.setAttribute('loading', 'lazy');
    }
});

function mOverImage(img) {
    img.src = "images/student-at-work-1.jpg";
}

function mOutImage(img) {
    img.src = "images/studying.jpg";
}