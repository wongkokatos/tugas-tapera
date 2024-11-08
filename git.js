(() => {
    const hideEl = window.location.hash && window.location.hash != '#latest' ?
    (el) => "#" + el.id !== window.location.hash :
    (el) => el.getAttribute('nr') !== '1';
    for (let el of document.getElementsByClassName('collapsible')) {
    let arrow = document.createElement('div');
    arrow.innerHTML = '▽';
    arrow.style.float = 'left';
    arrow.style.position = 'relative';
    arrow.style.left = '-1em';
    arrow.style.top = '+1.5em';
    arrow.style.fontSize = 'larger';
    arrow.style.cursor = 'pointer';
    
    const toggle = () => {
    this.classList.toggle('active');
    let details = el.nextElementSibling;
    if (details.style.display === 'none') {
    details.style.display = 'block';
    arrow.innerHTML = '▽';
    } else {
    details.style.display = 'none';
    arrow.innerHTML = '▷';
    }
    };
    
    if (hideEl(el)) {
    toggle();
    }
    
    el.addEventListener('click', toggle);
    arrow.addEventListener('click', toggle);
    el.parentElement.insertBefore(arrow, el);
    }
})();