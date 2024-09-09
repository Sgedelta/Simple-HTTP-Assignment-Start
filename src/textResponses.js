

const hello = 'Hello World!';
module.exports.hello = hello;

const getTimeString = () => {

    const d = new Date();
    const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    
    return dateString;

};
module.exports.getTimeString = getTimeString;


const getTime = (request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write(getTimeString());
    response.end();

}
module.exports.getTime = getTime;

const getHello = (request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write(hello);
    response.end();
    
}
module.exports.getHello = getHello;