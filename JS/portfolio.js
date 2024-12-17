function filterSelection(category) {
    const items = document.getElementsByClassName('photo-box');
    for (let i = 0; i < items.length; i++) {
        if (category === 'all' || items[i].classList.contains(category)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }

    const buttons = document.getElementsByClassName('filter-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    document.querySelector(`[onclick="filterSelection('${category}')"]`).classList.add('active');
}

function openModal(imageSrc) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('modalImage').src = imageSrc;
}

function closeModal() {
    document.getElementById('lightbox').style.display = 'none';
}
