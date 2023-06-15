const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

app.use(express.urlencoded());
app.use(express.json());

app.post('/normal', (req, res) => {
    var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey={API_KEY}';
    axios.get(url).then(function(r1) {
        var rand = Math.floor(Math.random() * (r1.data.articles.length + 1));
        var result = r1.data.articles[rand];
        var img = JSON.stringify(result.urlToImage);
        var title = JSON.stringify(result.title);
        axios.get(result.url).then(function(r2) {
            var dom = new JSDOM(r2.data, { url: result.url });
            var article = new Readability(dom.window.document).parse();
            var content = JSON.stringify(article.textContent);
            var newsSend = [img, title, content];
            res.send(newsSend);
        })
    })
});

app.post('/topics', (req, res) => {
    var topic = req.body.topic;
    var url = 'https://newsapi.org/v2/everything?q=' + topic + '&language=en&apiKey={API_KEY}';
    axios.get(url).then(function(r1) {
        var rand = Math.floor(Math.random() * (r1.data.articles.length + 1));
        var result = r1.data.articles[rand];
        var img = JSON.stringify(result.urlToImage);
        var title = JSON.stringify(result.title);
        axios.get(result.url).then(function(r2) {
            var dom = new JSDOM(r2.data, { url: result.url });
            var article = new Readability(dom.window.document).parse();
            var content = JSON.stringify(article.textContent);
            var newsSend = [img, title, content];
            res.send(newsSend);
        })
    })
});
