const toAnimate = document.querySelectorAll('.swipe-in');
for (let index = 0; index < toAnimate.length; index++) {
    loadAnimation(toAnimate[index], index);
}

function loadAnimation(node, delayMultiplier) {
    let delay = 500 * delayMultiplier;
    setTimeout(() => {
        node.classList.add('animated');
    }, [delay])
}
