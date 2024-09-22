function activateBreathing() {
    const element = document.getElementById('breathing-style');
    element.classList.add('breathe');
    setTimeout(() => {
        element.classList.remove('breathe');
    }, 500);
}
