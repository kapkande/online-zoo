const imeges = document.querySelectorAll('.video__asideBar-item');
(() => {
    const arrIcons = ['gorilla', 'alligator', 'gorilla', 'gorilla', 'gorilla', 'gorilla', 'sidebar_icon', 'gorilla']
    imeges.forEach((e, i) => {
        if (!arrIcons[i]) { return }
        e.classList.add(`asideBar__item-${i}`)
        e.style.backgroundImage = `url(../../assets/icons/zoos/${arrIcons[i]}.svg)`



        e.addEventListener('mouseover', () => {
            e.style.backgroundImage = `url(../../assets/icons/zoos/${arrIcons[i]}-active.svg)`
        });
        e.addEventListener('mouseout', () => {
            e.style.backgroundImage = `url(../../assets/icons/zoos/${arrIcons[i]}.svg)`

        });
        e.addEventListener('click', () => {
            let url = new URL(window.location.protocol + "//" + window.location.host + window.location.pathname)
            url.searchParams.set('bord', arrIcons[i])
            window.history.replaceState({}, '', `${url.href}`)
            checkQuery()
        })

        if (i == 6) {
            e.addEventListener('click', () => {
                imeges.forEach((e, i) => {
                    console.log(e.className.split(' ')[1]);
                });
            })
        };
    });
})()


function swopBord(arrIcons) {

}



