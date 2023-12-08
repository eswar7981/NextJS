const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write(
      "<header><title>First</title></header><body><p>Welcome Home</p></body>"
    );
    res.write("</html>");
    res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write(
      "<header><title>First</title></header><body><p>Welcome to About us Page</p></body>"
    );
    res.write("</html>");
    res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write(
      "<header><title>First</title></header><body><p>Welcome to my Node.js project</p></body>"
    );
    res.write("</html>");
    res.end();
  }

  res.end();
});

server.listen(3000);
