function checkQuery() {

    let nameOfAnimal = document.location.href.split('?bord=')[1];
    if (!nameOfAnimal) { nameOfAnimal = 'gorilla' };
    let targetDate = date[nameOfAnimal];
    if (!targetDate) { targetDate = date.gorilla };
    const title = document.querySelector('.video__title');
    title.textContent = targetDate.title;


    createTextBlock(targetDate)
    createVideo(targetDate)

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

function createVideo(targetDate) {
    console.log(targetDate);
    const video = document.querySelector('.video__view');
    video.src = targetDate.video[0];

    const choiceVideoBlock = document.querySelector('.video__choiceVideoBlock');

    targetDate.video.forEach( (e, i) => {
        const item = document.createElement('div');
        item.classList.add('video__choice__item');
        item.style.backgroundImage = `url(../../assets/imeges/zoos/slider/garillaForSlider-${i}.jpg)`
        choiceVideoBlock.appendChild(item);
       
    });



    
}

async function name() {
    //     let response = await fetch(`https://img.youtube.com/vi/4bxwB4jD_Eg/mqdefault.jpg`);
    // console.log(response);
    //     let blob = await response.blob(); // скачиваем как Blob-объект

    //     // создаём <img>
    //     let img = document.createElement('img');
    //     img.style = 'position:fixed;top:10px;left:10px;width:100px';
    //     document.body.append(img);

    //     // выводим на экран
    //     img.src = URL.createObjectURL(blob);



    // await Promise.all(targetDate.video.map(async (e) => {
    //     const item = document.createElement('div');
    //     item.classList.add('videochoiceitem');
    //     const img = await fetch(`https://img.youtube.com/vi/4bxwB4jD_Eg/mqdefault.jpg`, {mode: 'no-cors'});
    //     let blob = await img.blob();

    //     choiceVideoBlock.appendChild(item);

    //     console.log(img);
    //     item.style.backgroundImage = `url(${blob})`
    //     item.style.backgroundImage = URL.createObjectURL(blob);

    //   }));



   
    await fetch('https://static-basket-01.wb.ru/vol1/crm-bnrs/bners1/big_spp_1708sng.jpg')
    .then(response => response.blob())
    .then(blob => {
      const img = document.createElement('img');
      img.style = 'position:fixed;top:10px;left:10px;width:100px';
      img.src = URL.createObjectURL(blob);
      document.body.appendChild(img);
    });
   
}
name()