const arrIcons = ['gorilla', 'alligator', 'gorilla', 'gorilla', 'gorilla', 'gorilla', 'sidebar_icon', 'gorilla']
const imeges = document.querySelectorAll('.video__asideBar-item');

(() => {
    imeges.forEach((e, i) => {
        if (!arrIcons[i]) { return };
        e.classList.add(`asideBar__item-${i}`);
        e.classList.add(`asideBar__item__${arrIcons[i]}`);

        if (i == 0) { e.classList.add('iconActive'); }

        e.addEventListener('mouseover', () => {
            e.classList.add(`asideBar__item__${arrIcons[i]}-target`);
        });
        e.addEventListener('mouseout', () => {
            e.classList.remove(`asideBar__item__${arrIcons[i]}-target`);
        });

        let url = new URL(window.location.protocol + "//" + window.location.host + window.location.pathname);

        e.addEventListener('click', () => {
            url.searchParams.set('bord', arrIcons[i]);
            window.history.replaceState({}, '', `${url.href}`);
            document.querySelector('.iconActive').classList.remove('iconActive')
            e.classList.add('iconActive');


            const targetDate = getTargetDate();
            createTextBlock(targetDate);
            setUrlForIcons(targetDate);


        })

        url.searchParams.set('bord', arrIcons[i]);
        window.history.replaceState({}, '', `${url.href}`);
    });
})()