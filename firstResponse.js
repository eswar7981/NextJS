const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write(
    "<header><title>First</title></header><body><p>My first response</p></body>"
  );
  res.write("</html>");
  res.end()
});

server.listen(3000);
