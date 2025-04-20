const express = require('express');
require('dotenv').config()
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const path = require('path');
const route = require('./routes');

const port = process.env.PORT || 3000;


app.use(morgan('combined'));
const db = require('./config/db/index')
db.connectDB()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources','view'));
app.use(express.static( path.join(__dirname, 'public')))
app.use(express.json());
 // nguyên bản
// app.get('/news', (req, res) => {
//   res.render('news');
// });
const newsRouter = require("./routes/news");
const peopleRouter = require("./routes/add_people");
app.use('/',newsRouter)
// route(app)
app.use("/v1",peopleRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
