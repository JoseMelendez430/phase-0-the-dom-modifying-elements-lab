document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelector("#main");
    if (mainElement) {
      mainElement.remove();
    }
  
    const newHeader = document.createElement("h1");
    newHeader.id = "victory";
    newHeader.textContent = "Jose is the champion";
  
    document.body.appendChild(newHeader);
  });