document.querySelectorAll('.image-container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image').src = image.getAttribute('src');
  }

    document.querySelector('.popup-image').onclick = () => {
      document.querySelector('.popup-image').style.display = 'none';
    }

});