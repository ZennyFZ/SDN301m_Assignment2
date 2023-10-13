function showHide(index) {
    var activeActionButton = document.getElementById("activeActionButton"+index);
    var actionButton = document.getElementById("actionButton"+index);
    if (actionButton.style.display === "none") {
      actionButton.style.display = "block";
      activeActionButton.innerHTML = "Hide Action";
    } else {
      actionButton.style.display = "none";
      activeActionButton.innerHTML = "Show Action";
    }
}