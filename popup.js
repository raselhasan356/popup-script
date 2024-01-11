function showPopup() {
  var loadDuration = 5000;
  var popup = document.getElementById("popup");

  setTimeout(function () {
    // Apply styles dynamically
    popup.style.display = "block";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.backgroundColor = "#0acf73";
    popup.style.border = "1px solid #ccc";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    popup.style.zIndex = "999";

    // Apply styles for the close button
    var closeBtn = document.getElementById("closeBtn");
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "5px";
    closeBtn.style.right = "5px";
    closeBtn.style.cursor = "pointer";
  }, loadDuration);
}

// Function to hide the popup
function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

// Create the popup dynamically
var popup = document.createElement("div");
popup.id = "popup";
popup.style.display = "none";

var closeBtn = document.createElement("span");
closeBtn.id = "closeBtn";
closeBtn.innerHTML = "&times;";
closeBtn.onclick = hidePopup;
closeBtn.style.position = "absolute";
closeBtn.style.top = "5px";
closeBtn.style.right = "5px";
closeBtn.style.cursor = "pointer";

var content = document.createElement("p");
content.innerHTML = "Hello, Welcome to our site!";

popup.appendChild(closeBtn);
popup.appendChild(content);

document.body.appendChild(popup);

// Attach event listener to the close button
document.getElementById("closeBtn").addEventListener("click", hidePopup);

// Call the showPopup function when the page loads
window.onload = showPopup;
