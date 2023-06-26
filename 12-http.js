const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homePage");
  } else if (req.url === "/hi") {
    res.write("Good Day");
    res.end();
  } else if (req.url === "/bye") {
    res.write("Bad Day");
    res.end();
  }
  res.end(`
  <h1>Oops!</h1>
  <p>Page Not Found</p>
  <a href="/hi">Hi</a>`);
});

server.listen(5000);
