const svg = document.querySelector('.svg');
const blockButtons = document.querySelector('.buttons');
blockButtons.addEventListener('click', (e) => {
    const svg = document.querySelector('.svg');
    const target = e.target;
    const s = svg.viewBox.animVal
    if (target.classList.contains('plus')) {
        console.log(svg.viewBox.animVal);
        svg.setAttribute('viewBox', `${s.x} ${s.y} ${s.width - 50} ${s.height - 50}`)
    }
    if (target.classList.contains('minus')) {
        svg.setAttribute('viewBox', `${s.x} ${s.y} ${s.width + 50} ${s.height + 50}`)
    }
});


svg.onmousedown = function () {
    svg.classList.add('map-active')
    document.onmousemove = function (e) {

        if (svg.classList.contains('map-active')) {
            const svg = document.querySelector('.svg');
            const s = svg.attributes.viewBox.value;
            console.dir(s);
            console.log(s.x , s.y);
            svg.setAttribute('viewBox', `${e.pageX - s.x} ${e.pageY - s.y} ${s.width} ${s.height}`)
        }

    }
    document.querySelector('.wrapper').onmouseup = function () {
        // console.log(11);
        svg.classList.remove('map-active')
    }
}