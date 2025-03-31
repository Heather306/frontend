let cropper;
let uploadedImage = document.getElementById('uploaded-image');
let resultPopup = document.getElementById('result-popup');
let resultText = document.getElementById('result-text');

// Function to preview uploaded image
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = 'block';
        document.getElementById('remove-image-btn').style.display = 'inline-block';
        
        // Show the cropping container
        document.getElementById('cropper-container').style.display = 'block';
        
        // Initialize cropper
        if (cropper) {
            cropper.destroy();
        }
        cropper = new Cropper(uploadedImage, {
            aspectRatio: 1, // Keeps the cropper square (you can adjust this)
            viewMode: 1,    // Restricts the cropper within the container bounds
        });
    }
    
    reader.readAsDataURL(file);
}

// Function to crop the image
function cropImage() {
    const croppedCanvas = cropper.getCroppedCanvas();
    const croppedImageUrl = croppedCanvas.toDataURL();
    
    // Show the result (simulate analysis)
    displayResultPopup('Skin condition analysis in progress...');
}

// Function to display result popup
function displayResultPopup(message) {
    resultText.textContent = message;
    resultPopup.style.display = 'flex';
}

// Function to close the result popup
function closePopup() {
    resultPopup.style.display = 'none';
}

// Function to remove the uploaded image
function removeImage() {
    uploadedImage.src = '';
    uploadedImage.style.display = 'none';
    document.getElementById('remove-image-btn').style.display = 'none';
    document.getElementById('cropper-container').style.display = 'none';
}




