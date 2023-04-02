const svg:any = document.querySelector('.svg');
const blockButtons:any  = document.querySelector('.buttons');
const map:any  = document.querySelector('.map');
const viewBox:any  = svg.viewBox.animVal;
const body:any  = document.querySelector('.body');

function name1() {
    svg.setAttribute('width', map.clientWidth)
blockButtons.addEventListener('click', (e:any ) => {
    const target = e.target;
    if (target.classList.contains('plus')) {
        scaling(100);
    }
    if (target.classList.contains('minus')) {
        scaling(-100);
    }
});

svg.onmousedown = function (e:any ) {
    const viewBox = svg.attributes.viewBox.value.split(' ');
    svg.classList.add('map-active')
    const x = e.pageX;
    const y = e.pageY;
    document.onmousemove = function (ee:any) {
        if (svg.classList.contains('map-active')) {
            body.style.cursor = 'move';
            svg.setAttribute('viewBox', `${x - e.pageX + +viewBox[0]} ${y - e.pageY + +viewBox[1]} ${viewBox[2]} ${viewBox[3]}`)
        }
    }
    const wrapper:any = document.querySelector('.wrapper');
    wrapper.onmouseup = function (e:any ) {
        svg.classList.remove('map-active');
        body.style.cursor = 'default';
    }
}

window.addEventListener('wheel', (e) => {
    const target:any  = e.target
    if (target.closest('path')) {
        scaling(e.deltaY > 0 ? -100 : 100);
        body.classList.add('hidden');
    } else {body.classList.remove('hidden'); }

});

function scaling(params:any ) {
    if (params > 0) {
        if (150 > viewBox.width || 150 > viewBox.height) { return };
        svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width - 100} ${ viewBox.height - 100}`)
    }
    if (5000 < viewBox.width || 2000 < viewBox.height) { return };
    if (params < 0) {
        svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width + 100} ${viewBox.height + 100}`)
    }
}


}
export default name1