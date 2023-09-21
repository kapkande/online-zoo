const arrIcons = ['gorilla', 'alligator', 'panda','eagle'];

const asideBar = document.querySelector('.video__asideBar');

(() => {

    arrIcons.forEach(e => {
        const item = document.createElement('button');
        item.classList.add('video__asideBar-item');
        asideBar.appendChild(item)
    });
    const arrow = document.createElement('button');
    arrow.classList.add('video__asideBar-arrow');
    asideBar.appendChild(arrow)
})();
(() => {
    const imeges = document.querySelectorAll('.video__asideBar-item');
    const activeAnimal = getNameOfAnimal();
    imeges.forEach((e, i) => {
        if (!arrIcons[i]) { return };
        e.classList.add(`asideBar__item__${arrIcons[i]}`);

        e.classList.add(`asideBar__item-${i}`);

        if (arrIcons[i] == activeAnimal) { e.classList.add('iconActive'); }

        e.addEventListener('mouseover', () => {
            e.classList.add(`asideBar__item__${arrIcons[i]}-target`);
        });
        e.addEventListener('mouseout', () => {
            e.classList.remove(`asideBar__item__${arrIcons[i]}-target`);
        });


        e.addEventListener('click', () => {
            let url = new URL(window.location.protocol + "//" + window.location.host + window.location.pathname);
            url.searchParams.set('bord', arrIcons[i]);
            window.history.replaceState({}, '', `${url.href}`);
            document.querySelector('.iconActive').classList.remove('iconActive')
            e.classList.add('iconActive');

            const targetDate = getTargetDate();
            setBottonImage(targetDate)
            createTextBlock(targetDate);
            setUrlForIcons(targetDate);
            url.searchParams.set('bord', arrIcons[i]);
        window.history.replaceState({}, '', `${url.href}`);
        })        
    });
})();

function setBottonImage(targetDate) {
    const image = document.querySelector('#bottomImage');
    image.style.backgroundImage = `url(${targetDate.imageBotton})`
}

const onMenuClick = (even) => {

    const target = even.target;
    const popup = document.querySelector('.popup');
    const whadow = document.querySelector('.popup, .popup-active')
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const isAccountBTN = ['header__burger', 'header__burger__line'].includes(target.className);
    const isShadow = ['popup popup-active'].includes(target.className);
    const isPopupCross = ['popup__cross', 'popup__cross__line'].includes(target.className);
    if (isAccountBTN || isPopupCross) {
        popup.classList.toggle("popup-active")
        header.classList.toggle("header-active")
        body.classList.toggle('body-shadow')
    } else if (isShadow) {
        console.log(11);
        popup.classList.toggle("popup-active")
        header.classList.toggle("header-active")
        body.classList.toggle('body-shadow')
    }



}
const headerBurger = document.querySelector('.header__burger')
const Shadow = document.querySelector('.popup, .popup-active')
const clickMenuBurger = headerBurger.addEventListener('click', onMenuClick);
const clickShadow = Shadow.addEventListener('click', onMenuClick);