// const http = require('http');
const url = require('url');

import './assets/styles/index.css';
import satMainPage from './assets/components/mainPage/satMainPage'
import satDonatePage from './assets/components/donatePage/setDonatePage';
// satDonatePage()

http.createServer(function(req:any, res:any){
    console.log(req);
    let urlParts = url.parse(req.url);
    if (req.method == 'get'){
        switch (urlParts.pathnae){
            case "/" || "":
                satMainPage();
                break;
        }
    }
}).listen(3000);

// function satMainPage () {
//     const main = document.querySelector('.main')
//     main.innerHTML='<a class="header__nav__item link" href="">Zoos</a>'
// } 