// JavaScript to toggle the menu
var menu = document.getElementById("menu");
var toggleButton = document.getElementById("toggleButton");
var menuOpen = false;

toggleButton.addEventListener("click", function() {
    if (menuOpen) {
        menu.style.left = "-200px"; // Close the menu
    } else {
        menu.style.left = "20px"; // Open the menu
    }
    menuOpen = !menuOpen;
});

// JavaScript to share the website on social media platforms
function shareOnFacebook() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href));
}

function shareOnTwitter() {
    window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href));
}

function shareOnLinkedIn() {
    window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href));
}

// JavaScript to copy the website link to the clipboard
function copyWebsiteLink() {
    var tempInput = document.createElement("input");
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Link copied to clipboard: " + window.location.href);
}

var facebookButton = document.getElementById("facebook");
var twitterButton = document.getElementById("twitter");
var linkedinButton = document.getElementById("linkedin");
var copyLinkButton = document.getElementById("copyLink");

facebookButton.addEventListener("click", shareOnFacebook);
twitterButton.addEventListener("click", shareOnTwitter);
linkedinButton.addEventListener("click", shareOnLinkedIn);
copyLinkButton.addEventListener("click", copyWebsiteLink);