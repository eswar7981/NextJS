const http=require('http')

const server=http.createServer((req,res)=>{
    console.log('Eswar')
})

server.listen(3000)