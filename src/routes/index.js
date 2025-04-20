function route(app){
    app.get('/', (req, res) => {
        res.render('home');
      });
      
      
      app.get('/news', (req, res) => {
        res.render('news');
      });
}

module.exports = route