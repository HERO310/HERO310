const imageContainer = document.getElementById('imageContainer');
const imageUpload = document.getElementById('imageUpload');
const imageList = document.getElementById('imageList');
const randomButton = document.getElementById('randomButton');

const images = [];

imageUpload.addEventListener('change', function (e) {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target.result;
            images.push(imageUrl);

            // Add the image to the list
            const li = document.createElement('li');
            li.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
            imageList.appendChild(li);
        };
        reader.readAsDataURL(file);
    }
});

randomButton.addEventListener('click', function () {
    if (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        imageContainer.innerHTML = `<img src="${randomImage}" alt="Random Image">`;
    } else {
        alert('Please upload images before selecting a random image.');
    }
});
