function getTargetDate() {

    let nameOfAnimal = document.location.href.split('?bord=')[1];
    if (!nameOfAnimal) { nameOfAnimal = 'gorilla' };
    let targetDate = date[nameOfAnimal];
    if (!targetDate) { targetDate = date.gorilla };
    return targetDate;


}

createIconsVideo()

createTextBlock(getTargetDate())
setUrlForIcons(getTargetDate())


function createTextBlock(targetDate) {
    const title = document.querySelector('.video__title');
    title.textContent = targetDate.title;

    const info = document.querySelector('.info');
    document.querySelector('.info__textBlock')?.remove();

    const textBlock = document.createElement('div');
    textBlock.classList.add("info__textBlock");

    targetDate.text.forEach(element => {
        const item = document.createElement('div');
        item.classList.add('info__textBlock__item')

        const subtitle = document.createElement('div');
        subtitle.classList.add('info__textBlock__subtitle');
        subtitle.textContent = element[0];
        item.appendChild(subtitle);

        createDivElement(element.slice(1), item, subtitle)

        textBlock.appendChild(item);
        info.appendChild(textBlock)

    });

}

function createDivElement(arr, item) {
    arr.forEach(e => {
        const text = document.createElement('div');
        text.classList.add('info__text');
        text.innerHTML = e;
        item.appendChild(text);
    });

}

function setUrlForIcons(targetDate) {
    const video = document.querySelector('.video__view');
    video.src = targetDate.video[0];
    const videoChoiceItems = document.querySelectorAll('.video__choice__item');
    document.querySelector('.video__choice__item-active')?.classList.remove('video__choice__item-active');
    videoChoiceItems.forEach((e, i) => {
        e.style.backgroundImage = `url(${targetDate.photoFromVideo[i]})`
        if (i == 0) { e.classList.add('video__choice__item-active') };
    });
}

function createIconsVideo() {
    const choiceVideoBlock = document.querySelector('.video__choiceVideoBlock');
    for (let i = 0; i < 4; i++) {
        const item = document.createElement('div');
        item.classList.add('video__choice__item');
        choiceVideoBlock.appendChild(item);
    }
}
