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


const key = '47c6f5ec-fc30-40a6-b27c-55b158578b77'



ymaps.ready(init)
function init() {
    var map = new ymaps.Map("map", {
        center: [25, 10],
        zoom: 3
    });
    document.querySelector('.ymaps-2-1-79-gototech')?.remove();
    document.querySelector('.ymaps-2-1-79-controls__control')?.remove();


    ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
        ymaps.geoQuery(geojson).setOptions({ fillColor: '#C3B89E', strokeColor: '#EAF7FE' }).addToMap(map);
    });

    ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
        var regions = ymaps.geoQuery(geojson);
        regions.search('properties.iso3166 = "US"').setOptions('fillColor', '#FFEE2E').addToMap(map);
    });
    ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
        var regions = ymaps.geoQuery(geojson);
        regions.search('properties.iso3166 = "CN"').setOptions('fillColor', '#FFEE2E').addToMap(map);
    });

    // var polygon = new ymaps.Polygon([
    //     [[-180, 90], [180, 90],
    //      [90, -180], [9,180]],

    // ], {
    //     hintContent: "Многоугольник"
    // }, {
    //     fillColor: '#6699ff',
    //     // Делаем полигон прозрачным для событий карты.
    //     interactivityModel: 'default#transparent',
    //     strokeWidth: 8,
    //     opacity: 1
    // });
    // map.geoObjects.add(polygon);
  
}

// ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//         center: [55.76, 37.64],
//         zoom: 3
//     })

//     // var earthPolygon = new ymaps.Polygon([
//     //     [
//     //         { latitude: 80, longitude: -170 }, // северный запад
//     //         { latitude: 80, longitude: 170 }, // северный восток
//     //         { latitude: -80, longitude: 170 }, // южный восток
//     //         { latitude: -80, longitude: -170 } // южный запад
//     //     ]
//     // ], { hintContent: 'Москва',  balloonContent: 'Столица России'}, {
//     //     fillColor: '#000000', // голубой цвет
//     //     strokeColor: '#000000',
//     //     iconColor: '#FF0000'
//     // })
//     // myMap.geoObjects.add(earthPolygon);

//     //

//     var polygon = new ymaps.Polygon([
//         [[-180, 90], [180, -180], [10, -90], [-0, 0]],

//     ], {
//         hintContent: "Многоугольник"
//     }, {
//         fillColor: '#6699ff',
//         // Делаем полигон прозрачным для событий карты.
//         interactivityModel: 'default#transparent',
//         strokeWidth: 8,
//         opacity: 1
//     });
//     myMap.geoObjects.add(polygon);
//     // myMap.setBounds(polygon.geometry.getBounds());



//     //


//     var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
//         hintContent: 'Москва',
//         balloonContent: 'Столица России'
//     }, {
//         iconColor: '#FF0000' // красный цвет метки
//     });

//     myMap.geoObjects.add(myPlacemark);

//     ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
//         var regions = ymaps.geoQuery(geojson);
//         regions.search('properties.iso3166 = "US"').setOptions('fillColor', '#FFEE2E').addToMap(map);
//     });
//     ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
//         var regions = ymaps.geoQuery(geojson);
//         regions.search('properties.iso3166 = "CN"').setOptions('fillColor', '#FFEE2E').addToMap(map);
//     });
// })
