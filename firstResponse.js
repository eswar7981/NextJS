const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  var fetched=['d','dd']
  


  if (url === "/") {
    res.write('<html>')
    res.write('<head><title>First</title></head>')
    res.write('<body>')
    fs.readFile("./message.txt",(err,data)=>{
      if(err){
        console.log(err)
      }
      else{
      fetched=[...fetched,...data.toString().split(',')]
   
      }
    } 
    )
    fetched.map((elem)=>{
      res.write('hello')
    })
    res.write('<p>Enter Details Here</p><?php fread($myfile,filesize("message.txt"))  ?><form action="/message" method="POST"><input type="text" name="message" ></input><button type="submit">Send</button></form>')
    res.write('</body>')
    res.write("</html>");

  
  res.end()}
  if (url === "/message") {
    const body=[];
    req.on('data',(chunk)=>{
      body.push(chunk)
    })
    req.on('end',()=>{
      const parseBody=Buffer.concat(body).toString()
      const data=parseBody.split('=')
   
      fs.appendFile("message.txt",data[1]+',',err=>{
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
      
    })
   
  }


});

server.listen(3000);
