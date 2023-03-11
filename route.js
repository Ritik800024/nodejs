const fs=require('fs')
var data=fs.readFileSync('message.txt','utf8')

const req=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>server page</title></head>')
        res.write(`<body><form action="/message" method="POST">${data}<br><input type="text" name="message"><button type="submit">submit</button></form></body></html>`)
        return res.end()
    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            //console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const  parsebody=Buffer.concat(body).toString();
            const message=parsebody.split('=')[1]
            fs.writeFileSync('message.txt',message)
        })
    }
    res.statusCode=302
    res.setHeader('location','/')
    return res.end()
}
module.exports=req;
