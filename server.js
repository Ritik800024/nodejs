const http=require('http');
const server=http.createServer((req,res)=>{
    res.write('ritik kumar');
    res.end();
});
server.listen(4000);