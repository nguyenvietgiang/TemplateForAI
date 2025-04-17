// Get the modal
const modal = document.getElementById("addDocumentModal");
        
// Get the button that opens the modal
const btn = document.getElementById("addDocumentBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Get the cancel button
const cancelBtn = document.querySelector(".modal-footer .btn:not(.btn-add)");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x) or cancel, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

cancelBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Toggle between file upload and URL input based on selection
const documentType = document.getElementById("documentType");
const fileUploadGroup = document.getElementById("fileUploadGroup");
const urlGroup = document.getElementById("urlGroup");

documentType.addEventListener("change", function() {
    if (this.value === "file") {
        fileUploadGroup.style.display = "block";
        urlGroup.style.display = "none";
    } else {
        fileUploadGroup.style.display = "none";
        urlGroup.style.display = "block";
    }
});