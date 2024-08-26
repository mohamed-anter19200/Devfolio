var activeItems = document.getElementsByClassName('nav-link');

function handleClick(event) {
    for (let i = 0; i < activeItems.length; i++) {
        activeItems[i].classList.remove('active');
    }
    event.target.classList.add('active');
}

for (let i = 0; i < activeItems.length; i++) {
    activeItems[i].addEventListener('click', handleClick);
}
