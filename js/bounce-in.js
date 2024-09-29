function bounceIn() {
    for (let index = 1; index <= 4; index++) {
        let listElement = document.getElementById('list-element-'+ index)
        listElement.classList.add('bounce-in-fwd-list')
        listElement.style.animationName = 'bounce-in-fwd-list';
        listElement.style.animationDuration = '0.6s';
        listElement.style.animationDelay = `${index / 2}s`;
        listElement.style.animationFillMode = 'both';
    }
}

bounceIn()