const express = require('express');
const app = express();
const port = process.env.PORTS || 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const sassMiddleware = require('node-sass-middleware');

// using sass to convert sass file to css
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.urlencoded());
app.use(express.static('./assets'));

// make the uploads path available to the browser
app.use('/uploads', express.static(__dirname+"/uploads"));

// for adding layouts
app.use(expressLayouts);

// extract styles and scripts from subpages into layouts 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine 
app.set('view engine', 'ejs');
app.set('views', './views');

// connecting to routes
app.use('/', require('./routes'));


app.listen(port , function(err){
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});