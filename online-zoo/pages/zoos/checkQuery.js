function checkQuery() {

    let nameOfAnimal = document.location.href.split('?bord=')[1];
    if (!nameOfAnimal) { nameOfAnimal = 'gorilla' };
    let targetDate = date[nameOfAnimal];
    if (!targetDate) { targetDate = date.gorilla };
    const title = document.querySelector('.video__title');
    title.textContent = targetDate.title;

    // if(document.querySelector('.info__textBlock')){return};
    createTextBlock(targetDate)




}
checkQuery()

function createTextBlock(targetDate) {
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

        createDivElement(element.splice(1), item, subtitle)




        textBlock.appendChild(item);
        info.appendChild(textBlock)

    });

}

function createDivElement(arr, item, subtitle) {
    arr.forEach((e, i) => {
        console.log(e);
        const text = document.createElement('div');
        text.classList.add('info__text');
        text.innerHTML = e;
        item.appendChild(text);
    });

}