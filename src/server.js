

const http = require('http');
const fs = require('fs');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);


const onRequest = (request, response) => {
    switch(request.url) 
    {

        case '/':
            response.writeHead(200, {
                'Content-Type': 'text/html',
                
            });
            response.write(index);
            break;
        default:
            response.writeHead(404, {
                'Contesnt-Type': 'text/plain',

            });
            response.write("WRONG PAGE!");
            break;

    }
    
    response.end();
};


http.createServer(onRequest).listen(port, () => {
    console.log(`server running on port ${port}`);
});