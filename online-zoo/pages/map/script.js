// const svg = document.querySelector('.svg');
// const blockButtons = document.querySelector('.buttons');
// const map = document.querySelector('.map');
// const viewBox = svg.viewBox.animVal;
// const body = document.querySelector('.body');

// svg.setAttribute('width', map.clientWidth)
// blockButtons.addEventListener('click', (e) => {
//     const target = e.target;
//     if (target.classList.contains('plus')) {
//         scaling(100);
//     }
//     if (target.classList.contains('minus')) {
//         scaling(-100);
//     }
// });

// svg.onmousedown = function (e) {
//     const viewBox = svg.attributes.viewBox.value.split(' ');
//     svg.classList.add('map-active')
//     const x = e.pageX;
//     const y = e.pageY;
//     document.onmousemove = function (e) {
//         if (svg.classList.contains('map-active')) {
//             body.style.cursor = 'move';
//             svg.setAttribute('viewBox', `${x - e.pageX + +viewBox[0]} ${y - e.pageY + +viewBox[1]} ${viewBox[2]} ${viewBox[3]}`)
//         }
//     }
//     document.querySelector('.wrapper').onmouseup = function (e) {
//         svg.classList.remove('map-active');
//         body.style.cursor = 'default';
//     }
// }

// window.addEventListener('wheel', (e) => {
//     const target = e.target
//     if (target.closest('path')) {
//         scaling(e.deltaY > 0 ? -100 : 100);
//         body.classList.add('hidden');
//     } else {body.classList.remove('hidden'); }

// });

// function scaling(params) {
//     if (params > 0) {
//         if (150 > viewBox.width || 150 > viewBox.height) { return };
//         svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width - 100} ${ viewBox.height - 100}`)
//     }
//     if (5000 < viewBox.width || 2000 < viewBox.height) { return };
//     if (params < 0) {
//         svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width + 100} ${viewBox.height + 100}`)
//     }
// }

// console.log(1);

// const LOCATION = {
//     center: [27.5667, 10],
//     zoom: 10
// };

// window.map = null;



// main();
// async function main() {
//     await ymaps3.ready;
//     const {
//         YMap,
//         YMapDefaultSchemeLayer,
//         YMapControls,
//         myMap
//     } = ymaps3;

//     const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

//     map = new YMap(document.getElementById('app'), { location: LOCATION }, [
//         new YMapDefaultSchemeLayer(),
//         new YMapControls({ position: 'right' }, [
//             new YMapZoomControl({})
//         ]),
//     ]);




// }






ymaps.ready(init)
function init() {
    var map = new ymaps.Map("map", {
        center: [6, 20],
        zoom: 3
    });
    // const myPlacemark = new ymaps.Placemark([0.76, 0.64], {
    //     hintContent: 'РњРѕСЃРєРІР°',
    //     balloonContent: 'РЎС‚РѕР»РёС†Р° Р РѕСЃСЃРёРё'
    // });
    // map.geoObjects.add(myPlacemark);
    document.querySelector('.ymaps-2-1-79-gototech')?.remove();
    document.querySelector('.ymaps-2-1-79-controls__control')?.remove();

    // const img = new ymaps.Placemark(map.getCenter(), {
    //     hintContent: 'РЎРѕР±СЃС‚РІРµРЅРЅС‹Р№ Р·РЅР°С‡РѕРє РјРµС‚РєРё',
    //     balloonContent: 'Р­С‚Рѕ РєСЂР°СЃРёРІР°СЏ РјРµС‚РєР°'
    // }, {
    //     // РћРїС†РёРё.
    //     // РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
    //     iconLayout: 'default#image',
    //     // РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
    //     iconImageHref: '../../assets/icons/dolar.svg',
    //     // Р Р°Р·РјРµСЂС‹ РјРµС‚РєРё.
    //     iconImageSize: [30, 42],
    //     // РЎРјРµС‰РµРЅРёРµ Р»РµРІРѕРіРѕ РІРµСЂС…РЅРµРіРѕ СѓРіР»Р° РёРєРѕРЅРєРё РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕ
    //     // РµС‘ "РЅРѕР¶РєРё" (С‚РѕС‡РєРё РїСЂРёРІСЏР·РєРё).
    //     iconImageOffset: [-5, -38],


    // })
    // map.geoObjects.add(img);


    //выделение 
    // ymaps.borders.load('RU', {
    //     lang: "en",
    //     quality: 2
    // }).then(function (geojson) {
    //     console.log(map);
    //     for (var i = 0; i < geojson.features.length; i++) {
    //     var objectManager = new ymaps.ObjectManager();
    //     objectManager.add(geojson.features[i]);
    //     map.geoObjects.add(objectManager)
    //     }
    //     console.log(geojson.features[1]);
    // });



    ymaps.borders.load('RU', {
        lang: 'en'
    }).then(function (geojson) {
        var features = geojson.features.map(function (feature) {
            feature.id = feature.properties.iso3166;
            return feature;
        });
        var objectManager = new ymaps.ObjectManager();
        objectManager.add(features);
        map.geoObjects.add(objectManager);
    })

    
    // ymaps.borders.load('USA', {
    //     lang: 'en'
    // }).then(function (geojson) {
    //     console.log(geojson);
    // })
}
