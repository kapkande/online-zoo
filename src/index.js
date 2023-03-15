// const http = require('http');
// const url = require('url');

// import './assets/styles/index.css';
// import satMainPage from './assets/components/mainPage/satMainPage'
// import satDonatePage from './assets/components/donatePage/setDonatePage';
// satDonatePage()



// function satMainPage () {
//     const main = document.querySelector('.main')
//     main.innerHTML='<a class="header__nav__item link" href="">Zoos</a>'
// } 
const path = require('path');
const express = require('express');
const app = express();


const PORT = 2000;

app.set('views', path.resolve(__dirname, 'ejs'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { data: 'dasd' });
})
app.get('/donate/index.html', (req, res) => {
    res.render('index', { data: 'dasd' });
})
app.listen(PORT, () => {
    console.log('server has been started ' + PORT);
})