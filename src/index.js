const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 8080;

//hppt logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', handlebars({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


//route
app.get('/', (req, res) => {
  res.render('home');
})



//port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})