const path =  require ('path');
const express = require('express');


const app = express();
app.use(express.json());

const PORT = 2000;

app.set('views', path.resolve(__dirname, '../src/ejs'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, '../')))

app.get('/', (req:any, res:any) => {
    res.render('mainPage', { title: 'about' });
    // req.render(console.log(1))
    // console.log(req.send('d'));
    
})
app.get('/donate', (req:any, res:any) => {
    res.render('donate', { title: 'donate' });
})
app.get('/map', (req:any, res:any) => {
    res.render('mapPage', { title: 'map' });
})
app.listen(PORT, () => {
    console.log('server has been started ' + PORT);
})