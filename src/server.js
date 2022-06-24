//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;


//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(
        "<html>" +
        "<script type='text/javascript'>fetch('https://api2.binance.com/api/v3/ticker/24hr')\n" +
        "      .then(res => res.json())\n" +
        "      .then(data => { \n" +
        "      \tlet json = data[0];\n" +
        "      \tconsole.log(json[\"askPrice\"]);\n" +
        "      })\n" +
        "      \n" +
        "//ETHBTC price</script>"
    )
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});