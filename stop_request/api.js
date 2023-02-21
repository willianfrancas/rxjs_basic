const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    });

    const matchURL = /^\/response\/(.+)\/delay\/(\d+)\/?$/;
    // http://localhost:3000/response/{"data": "Hello World!"}/delay/1000
    if (!matchURL.test(req.url)) return res.end();

    const [, response, delay] = matchURL.exec(req.url);

    const jsonResponse = decodeURIComponent(response);

    setTimeout(() => {
        res.write(jsonResponse);
        res.end();
    }, +delay);

}).listen(3000);