

const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponse.js');



const port = process.env.PORT || process.env.NODE_PORT || 3000;



const onRequest = (request, response) => {
    switch(request.url) 
    {
        case '/':
            htmlHandler.getIndex(request, response);
            break;
        case '/page2':
            htmlHandler.getPage2(request, response);
            break;
        case '/hello':
            textHandler.getHello(request, response);
            break;
        case '/time':
            textHandler.getTime(request, response);
            break;
        case '/helloJSON':
            jsonHandler.getHelloJSON(request, response);
            break;
        case '/timeJSON':
            jsonHandler.getTimeJSON(request, response);
            break;
        case '/dankmemes':
            imageHandler.getMeme(request, response);
            break;
        default:
            htmlHandler.getIndex(request, response);
            break;

    }
    
    response.end();
};




http.createServer(onRequest).listen(port, () => {
    console.log(`server running on port ${port}`);
});